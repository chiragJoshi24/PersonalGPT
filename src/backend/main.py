from flask import Flask, request, jsonify
import cohere

app = Flask(__name__)

co = cohere.ClientV2("")

@app.route('/send-text', methods=['POST'])
def send_text():
    data = request.get_json()  
    user_message = data.get('text')  

    try:
        
        response = co.chat(
            model="command-r-plus",
            messages=[{"role": "user", "content": user_message}]
        )

        return jsonify({"response": response['messages'][0]['content']})

    except Exception as e:
        return jsonify({"error": str(e)}), 500  

if __name__ == '__main__':
    app.run(debug=True, port=5000)  
