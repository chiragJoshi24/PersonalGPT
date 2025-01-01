from flask import Flask, request, jsonify
import cohere
import os
from flask_cors import CORS
import requests
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("COHERE_API_KEY")
port = int(os.environ.get('PORT', 5000))

app = Flask(__name__)
CORS(app, origins=['https://personalgpt-3cv0.onrender.com/home'])
co = cohere.ClientV2(api_key)

@app.route('/', methods=['POST'])
def send_response():
    try:
        user_message = request.json.get('message')
        if not user_message:
            return jsonify({"error": "Message is required"}), 400

        response = co.chat(
            model="command-r-plus", 
            messages=[{"role": "user", "content": user_message}]
        )

        if not response or not response.message or not response.message.content:
            return jsonify({"error": "Invalid response from API"}), 500

        return jsonify({"response": response.message.content[0].text})

    except requests.exceptions.RequestException as req_err:
        return jsonify({"error": f"Request error: {str(req_err)}"}), 500
    except AttributeError as attr_err:
        return jsonify({"error": f"Response structure error: {str(attr_err)}"}), 500
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500  

if __name__ == '__main__':
    app.run(debug=False, port=port, host="0.0.0.0")  