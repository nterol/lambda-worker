import flag from 'country-code-emoji'

const template = cf => {
  const emoji = flag(cf.country) || '🖕'
  return `
<!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>AGAWA</title>
        <link rel="stylesheet" href="https://unpkg.com/browse/reset-css@5.0.1/reset.css" />
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');

        @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Montserrat&display=swap');

            body {
                background: #FFC4AA;
                min-height: 100vh;
                margin:0;
            }

            main {
                margin: 2rem;
                color: white;
            }

            h1 {
                font-family: "Dela Gothic One", cursive;
            }

            p {
                font-family: "Montserrat", sans-serif;
            }
        </style>
    </head>
    <body>
        <main>
            <h1>Hi Bitches 👋</h1>
            <p>You're connecting from ${cf.country} ${emoji}</p>
        <main>
        </body>
    </html>
`
}
export default template
