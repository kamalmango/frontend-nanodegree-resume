
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


bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}
}

bio.display();

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

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").prepend(formattedLocation);
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