from flask import Flask, request, jsonify
import google.generativeai as genai
import os
from flask_cors import CORS
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)
genai.configure(api_key=os.environ["GOOGLE_GEMINI_API_KEY"])
port = int(os.environ.get('PORT', 5000))

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 40,
    "max_output_tokens": 1024,
    "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
    model_name="gemini-2.0-flash-exp",
    generation_config=generation_config,
)

chat_session = model.start_chat(
    history=[
    ]
)
CORS(app, resources={r"/*": {"origins": ["http://localhost:5173", "'https://personalgpt-3cv0.onrender.com/home'"]}})

@app.route('/', methods=['POST'])
def send_response():
    try:
        user_message = request.json.get('message')
        if not user_message:
            return jsonify({"error": "Message is required"}), 400

        response = chat_session.send_message(user_message)

        if not response or not response.text:
            return jsonify({"error": "Invalid response from API"}), 500

        return jsonify({"response": response.text})

    except requests.exceptions.RequestException as req_err:
        return jsonify({"error": f"Request error: {str(req_err)}"}), 500
    except AttributeError as attr_err:
        return jsonify({"error": f"Response structure error: {str(attr_err)}"}), 500
    except Exception as e:
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500  

if __name__ == '__main__':
    app.run(debug=False, port=5000)  