const gunjanMessageScript = (name, email, message) => {
  return `
  <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            max-width: 500px;
            margin: 20px auto;
            background: white;
            padding: 10px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .user {
            font-size: 20px;
            font-weight: bold;
            color:#2196f3;
            
        }
        .footer {
            font-size: 12px;
            border-top: 1px solid #222;
            color: #777;
        }
        a {
        text-decoration: none;
      }
        a:hover {
        text-decoration: underline;
      }
      .message-box {
       font-size: 17px;
       text-align: center;
       color: #222;
       padding: 12px 14px;
       margin: 5px 0;
       width: 100%;
       box-sizing: border-box;
       word-wrap: break-word;
       white-space: pre-wrap;
     }
    </style>
</head>
<body>

    <div class="email-container">
        <h2>📩 Portfolio Message</h2>
        <p><strong class="user">Hi Gunjan,</strong></p>
         <p><strong>${name}</strong> has sent you a message through your portfolio.</p>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
        <div class="message-box">${message}</div>
        <div class="footer">
        <p>regards,<br><strong>Gunjan Kotadiya</strong></p>
        <a href="https://gunjankotadiya.vercel.app" target="_blank">https://gunjankotadiya.vercel.app</a>
        
        </div>
    </div>

</body>
</html>
`;
};
export default gunjanMessageScript;
