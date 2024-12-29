import cohere
import os
from dotenv import load_dotenv


load_dotenv()
api_key = os.getenv("API_KEY")

co = cohere.ClientV2(api_key)

response = co.chat(
    model="command-r-plus",
    messages=[{"role": "user", "content": "hi this is chirag joshi... introduce yourself"}]
)
message = response.message.content[0].text
print(message)

# with open('data.txt', 'w') as file:
#     file.write(response.message.content[0].text)