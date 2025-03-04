# PersonalGPT

<p align="center">
  <img src="/src/assets/image.png" />
</p>

## Description

This project implements a simple chatbot for question answering. It leverages Cohere and Google Gemini for context retrieval and generating responses.

## Features

- **User Login and Data Saving:** Users can log in with their email ID. No verification is required.
- **File Upload:** Users can upload files to provide context for the bot's responses.
- **Simple Interaction:** Users can interact with the bot using text prompts.
- **Response Generation:** Leverages Cohere and Google Gemini to generate accurate and contextually relevant answers based on user input.

## Usage

1. Clone the repository.
    ```
    git clone https://www.github.com/chiragJoshi24/PersonalGPT.git
    ```
2. Ensure that `npm`, `nodejs`, and `python` are installed on your system.
3. Run the following commands to install the necessary dependencies:
    ```bash
    npm install
    cd server && pip install -r requirements.txt
    ```
4. Start the application with:
    ```bash
    npm run start
    ```

## Future Enhancements

- **Custom Backend Development:** Transitioning to building a custom backend to handle response generation, providing more control and flexibility over the system's functionality.
- **Advanced AI Features:** Implementing additional advanced features such as more personalized responses, improved context management, and better user interaction capabilities.

## Contributing

Contributions are welcome via pull requests. For major changes, please open an issue first to discuss the proposed changes.

## Note

As of the latest commit the project isn't complete and therefore some functionalities might not work as expected.
