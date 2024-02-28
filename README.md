# Discord Selfbot Rich Presence

This script sets up a Discord selfbot with a rich presence feature. It utilizes the `discord.js-selfbot-v13` library to interact with Discord's API.

## Prerequisites

- Node.js installed on your system
- Discord account with a bot token

## Setup

1. Clone this repository or download the files.
2. Install dependencies by running `npm install` in the terminal.
3. Create a `.env` file and add your Discord bot token:

    ```plaintext
    TOKEN=your_discord_bot_token_here
    ```

4. Start the bot by running `node your_script_name.js` in the terminal.

## Features

- Rich presence: Displays custom information about the user playing the bot.
- Buttons: Provides buttons to invite the bot to servers and access a Discord server.

## Usage

1. Modify the rich presence settings in the `client.on('ready', ...)` event to customize the displayed information.
2. Run the script and the bot will set the rich presence on your Discord account.

## Important Note

Using selfbots may violate Discord's Terms of Service. Ensure you understand and comply with Discord's guidelines before using this script.

Made by Joltz