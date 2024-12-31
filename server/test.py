# This file is entirely for testing purposes.
# It has nothing to do with the project.
# It is mentioned in other components, literally zero times.

import cohere
import os
from dotenv import load_dotenv


load_dotenv()
api_key = os.getenv("COHERE_API_KEY")

co = cohere.ClientV2(api_key)

response = co.chat(
    model="command-r-plus",
    messages=[{"role": "user", "content": "hi this is chirag joshi... introduce yourself"}]
)
message = response.message.content[0].text
print(message)

# with open('data.txt', 'w') as file:
#     file.write(response.message.content[0].text)