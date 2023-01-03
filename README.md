# lol-champselect-ui
UI to display the league of legends champion selection in esports tournaments.





In order to play a replay that simulates a full tournament draft, please issue the following command to start the backend:

`npm start -- --data ../recordings/tournament-draft`


## Installation (Development purposes)
Please note: if you're looking for an easier installation, have a look at this project: https://github.com/FearNixx/vigilant-bans (the linked project is not associated or affiliated with the Riot Community Volunteers, and we can provide no warranty for the linked project)

1. Download and install Node.JS for Windows (or any other operating system): https://nodejs.org/download/release/v16.7.0/node-v16.7.0-x64.msi (please really install the linked version, 16.7.0, as otherwise you may run into issues)
2. Download or clone this Git-Repository to your local machine.
3. Inside the downloaded folder, open the `backend` folder, and open up a command prompt there (Windows: Shift + Rightclick -> Open Powershell / Commandline Window here)
4. Install all required dependencies for the backend using the command `npm install`
5. Start the backend using the command `npm start`
6. The backend should now launch on localhost:8999

### Installation of europe layout
7. Open up the folder `layouts/layout-volu-europe`, keep the backend (terminal) open & running!
8. Also open the terminal here (like in step 3)
9. Also issue `npm install` (like in step 4)
10. Also start the frontend using `npm start` (like in step 5)
11. The application will now be accessible under http://localhost:3000?backend=ws://localhost:8999

### Installation of simple layout
Please note that the simple layout cannot be directly used out of the box, it is more like an example of how you can create your own overlay. It is created as simple as possible from code perspective, thus it's name, but it is not simple to install and use.
You also need to edit the two files "overlay.png" and "underlay.png" in the folder layouts/layout-simple. We have provided some example, however you need to do it on your own.

7. Open up another terminal in the project root folder, using `Shift + Rightclick -> Open Powershell`.
8. You only need to execute the following command once: `npm install -g serve`
9. Now start the local web server, using the simple command `serve`
10. Now the application is accessible under http://localhost:5000/layouts/layout-simple/?backend=ws://localhost:8999


