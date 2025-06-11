const userMessageScript = (name) => {
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
    </style>
</head>
<body>

    <div class="email-container">
        <h2>📬 Thank You for Reaching Out!</h2>
        <p><strong class="user">Hi ${name},</strong></p>
        <p>Thank you for your message. I have received it and will get back to you shortly.</p>
        <p>If you need to reach me in the meantime, feel free to reply to this email.</p>
        
        <div class="footer">
            <p> regards,<br>
          <strong>Gunjan Kotadiya</strong><br />
          <a href="https://gunjankotadiya.vercel.app" target="_blank">https://gunjankotadiya.vercel.app</a>
        </p>
        </div>
    </div>

</body>
</html>
  `;
};

export default userMessageScript;
