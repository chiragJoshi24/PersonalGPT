from flask import Flask, request, jsonify
import cohere
import os
from dotenv import load_dotenv


load_dotenv()
api_key = os.getenv("COHERE_API_KEY")

app = Flask(__name__)

co = cohere.ClientV2(os.environ.API_KEY)
@app.route('/')

def send_response():
    data = request.get_json()  
    user_message = data.get('text')  

    try:
        response = co.chat(
            model="command-r-plus", 
            messages=[{"role": "user", "content": user_message}]
        )
        return jsonify({"response": response.message.content[0].text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500  

if __name__ == '__main__':
    app.run(debug=True)