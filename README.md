<h1>A.I.S.H.A stands for Artificially Intelligent Super Helpful Assistant.</h1>
<h3>It's a CHATGPT powered chatbot built to assist students.</h3>

![AISHA](https://raw.githubusercontent.com/lalitkrsharma/AISHA-chatbot/fdecf3a668ef04aa521b49092846ed5ead4aea70/AISHA.png)

This app is built on NextJs framework utilizing tailwind & JavaScript

It's currently deployed on https://chatgpt-lalitkrsharma.vercel.app/

The API costs me money, So it probably won't work forever but it does work as of March 2023.

I had fun making this project. Thank you for checking it out


===========================================================================

<h2>
You can use this project to create your own personalized chatbot in a few simple steps.
</h2>

1. Create a .env file inside the server folder or Add the following as environment variables in your deployed server.
  
          NAME = "Put The Name Of the Bot Here"

          ROLE = "Answer as if you were...(describe it's role)"

          DESCRIPTION = "(Fill this value with your detailed descriptions for the chatbot)"

          OPENAI_API_KEY = (Put Your API Key here)

2. Deploy the server and put the link inside line 15 in the Form.jsx file inside the chatgpt/client/component/chat folder.

3. Replace the name of the chatbot from the Head.jsx(line 19) & Message.jsx(line 49) files & Finally deploy the client folder on the web. (I used Vercel for this)

4. Enjoy Your Chatbot.

======================================================================

<h4>Note That the longer your description is the more tokens will be used in every prompt as all the Environment variables are passed along with every prompt.</h4>

I'm currently working on switching the api from Davinci to GPT3. Once that is done the chats would be continuos & won't use as many tokens.

