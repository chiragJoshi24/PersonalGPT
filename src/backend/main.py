from flask import Flask, request, jsonify
import cohere

app = Flask(__name__)

# Initialize Cohere client with your API key
co = cohere.ClientV2("JNa8ZIU2UUbErgtn8kqGyPUSvkqso5O6YdDDpxYb")

@app.route('/send-text', methods=['POST'])
def send_text():
    data = request.get_json()  # Get JSON data from React frontend
    user_message = data.get('text')  # Extract text from JSON

    try:
        # Make a call to Cohere's chat API
        response = co.chat(
            model="command-r-plus",
            messages=[{"role": "user", "content": user_message}]
        )

        # Extract and send the content from the response
        return jsonify({"response": response['messages'][0]['content']})

    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Handle errors if any

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Run Flask on port 5000
