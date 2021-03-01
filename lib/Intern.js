class Intern {
    constructor(name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
     this.title = "Intern"
    }
    getName(){
        return this.name; 
    }
    getId(){
        return this.id; 
    }
    getEmail(){
        return this.email; 
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return this.title;
    }
}
module.exports = Intern