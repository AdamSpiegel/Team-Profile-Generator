# **Team Profile Generator** :notebook:

  ## Table of Contents :books:
   1. [Description](#description)
   2. [Installation](#installation)
   3. [Project Usage](#Project-Usage)
   4. [License Information](#License-Information)
   5. [Contributors](#Project-Contributors)
   6. [Testing Instructions](#Testing-Instructions )
   7. [Contact Info](#Questions)
   
  ## Description :fountain_pen:
  A Node.js command-line application, whichs takes in information about a software engineering team, then generates an HTML webpage that displays summaries for each person (the personalized team).  Questions are asked for a manager along with their corresponding team members - made up of engineers and interns.

  ## Installation :hammer_and_wrench:	
  The installation for this application included developing our code from scratch.  The following steps had to be implemented in order to make this team profile generator functional:

  * Intially, a repository was built through Github which included our gitignore file.  Node modules and .DS_Store were added into this gitignore file in particular for use with this project.
  * Next, the node package manager was utilized to create a package.json file.  
  * An index.js file was then developed, along with the folders - dist (output of html), lib (employee.js files), tests (test.js files) and a src folder (templates for form output)
  * Required packages that had to be installed include Node and Inquirer (in addition to FS)
  * All tests were intially built out, to adhere to all passing guidelines.
  * All lib files (Employee, Engineer, Intern and Manager.js) were then constructed to extend all initial information from the "Employee", through each individual class.
  * The index.js and html files were then constructed to coincide and make functional.
    * Tools utilized in these documents include inquirer.prompt (to run questions), followed by a log of the user's answered which works into switch statements to continue asking the user to build their team.
    * A writeToFile and generateHTML function to produce the team.
    * Module.Exports (exporting data in modularization)
    * Bootstrap/Fontawesome

  ## Project Usage :necktie:
  This project application useagse includes being able to use the command line (throguh Gitbash), to run through a series of question to help build a software enginnering team.  
  
  This includes asking the Manager for their Name/Email/Id/Office Number, and then having the option to build their team with further engineers and interns.  The Engineer questions indlude Name/Email/Id/<em>Github User Name</em>, while Intern questions include Name/Email/Id/<em>School</em>. 
  
  You then have an option to "Finish Building Your Team", and then an HTML webpage generates displaying your customized built out software team.

  ## Further Development :man_technologist:


  ## Project Contributors :computer_mouse:	
  Adam Spiegel

  ## Testing Instructions :electric_plug:	
  Please follow instructions below to test generator functionality:
  1) Open terminal in provided folder (local for this example)
  2) run node index.js
  3) Follow instruction prompts.  You will be asked all questions as pertains to the manager/engineer/intern questions.
  4) Please note - you will have to arrow up or down to select your choices.
  5) If successful, the command line with generate your index.html file, you will be notified of a "Success" and your team profile will be saved to your local file, available for immediate use.
  
  ## Questions? :mag::e-mail:
  ### Please find my contact information via the links below below to reach out! 

  [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:adamspiegel23@gmail.com)  [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/AdamSpiegel)  

  