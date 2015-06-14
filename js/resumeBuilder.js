
var name = "Kamal Mango";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);


var bio = {
	"name" : "Kamal Mango",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "540 808 7806",
		"email" : "kamal.mango7@gmail.com",
		"github" : "kamalmango",
		"twitter" : "@kamalmango",
		"location" : "Reston, VA"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
	"skills" : ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
	"biopic" : "images/fry.jpg"
};

/*
$("#main").append(bio.name);
$("#main").append(bio.role);
$("#main").append(bio.contacts);
$("#main").append(bio.biopic);
$("#main").append(bio.welcomeMessage);
$("#main").append(bio.skills);
*/

var work = {
	"jobs" : [
		{
			"employer" : "Clarabridge",
			"title" : "Technical Support Analyst",
			"location" : "Reston, VA",
			"dates" : "2014 - Present",
			"description" : "lorem ipsum dolor sit amet etc etc etc."
		}
	]
}

var education = {
	"schools" : [
		{
			"name" : "Virginia Tech",
			"location" : "Blacksburg, VA",
			"majors" : ["ISE"],
			"degree" : "BS",
			"dates" : "2009-2014",
			"url" : "www.vt.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "CS 101",
			"school" : "Udacity",
			"dates" :"2015",
			"url" : "www.udacity.com"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "2009",
			"description" : "lorem ipsum dolor sit amet etc etc etc.",
			"images" : ["images/fry.jpg", "images/fry.jpg"]	
		},
		{
			"title" : "Project 2",
			"dates" : "2010",
			"description" : "lorem ipsum dolor sit amet etc etc etc.",
			"images" : ["images/fry.jpg", "images/fry.jpg"]
		}
	]
}


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}


var displaywork = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displaywork();



function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}


$("#main").append(internationalizeButton);

console.log(inName("Kamal Mango"));

// encapsulation, holding the display function inside the project object
projects.display = function() {  
 	for (project in projects.projects) {
 		$("#projects").append(HTMLprojectStart);

 		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
 		$(".project-entry:last").append(formattedTitle);

 		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
 		$(".project-entry:last").append(formattedDates);

 		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
 		$(".project-entry:last").append(formattedDescription);

 		if (projects.projects[project].images.length > 0) {
 			for (image in projects.projects[project].images) {
 				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
 				$(".project-entry:last").append(formattedImage);
 			}
 		}
 	}
}

projects.display();

$("mapDiv").append(googleMap);