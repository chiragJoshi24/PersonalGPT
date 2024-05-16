from langchain_community.vectorstores import FAISS
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_openai import ChatOpenAI, OpenAIEmbeddings

file_path = "data.txt"


def read_text_file(asdf):
    with open(asdf, 'r') as file:
        return file.read()


def get_question_from_user():
    return input("Enter your question: ")


context_text = read_text_file(file_path)

openai_api_key = "<api_key>"  # Replace with your actual API key

vectorstore = FAISS.from_texts([context_text], embedding=OpenAIEmbeddings(openai_api_key=openai_api_key))
retriever = vectorstore.as_retriever()
template = """Answer the question based only on the following context:
{context}

Question: {question}
"""
prompt = ChatPromptTemplate.from_template(template)
model = ChatOpenAI()

retrieval_chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | model
    | StrOutputParser()
)

question = get_question_from_user()

response = retrieval_chain.invoke(question)

print(response)
