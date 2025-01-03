# This file is entirely for testing purposes.
# It has nothing to do with the project.
# It is mentioned in other components, literally zero times.

import os
from dotenv import load_dotenv


# import cohere
# load_dotenv()
# api_key = os.getenv("COHERE_API_KEY")

# co = cohere.ClientV2(api_key)

# response = co.chat(
#     model="command-r-plus",
#     messages=[{"role": "user", "content": "hi this is chirag joshi... introduce yourself"}]
# )
# message = response.message.content[0].text
# print(message)

import google.generativeai as genai

genai.configure(api_key=os.environ["GOOGLE_GEMINI_API_KEY"])

# Create the model
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

response = chat_session.send_message("how to code")

print(response.text)

# with open('data.txt', 'w') as file:
#     file.write(response.message.content[0].text)