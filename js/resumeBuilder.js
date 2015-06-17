
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
	"welcomeMessage" : "Hi! I'm Kamal Mango. I'm a technology enthusiast who likes to solve real-world problems",
	"skills" : ["Python", "HTML", "CSS", "JavaScript", "SQL"],
	"biopic" : "images/fry.jpg"
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts,#footerContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts,#footerContacts").append(formattedEmail);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts,#footerContacts").append(formattedTwitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts,#footercontacts").append(formattedGithub);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts,#footerContacts").append(formattedLocation);

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
};




var work = {
	"jobs" : [
		{
			"employer" : "Clarabridge",
			"title" : "Technical Support Analyst",
			"location" : "Reston, VA",
			"dates" : "2014 - Present",
			"description" : "Build and fix webscrapers to gather customer data for analysis"
		}
	]
};

work.display = function() {
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
};




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
			"url" : "https://www.udacity.com/course/intro-to-computer-science--cs101"
		}
	]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name)
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedMajor);
	}

	$("#education").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedTitle + formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL = HTMLonlineURL.replace("#", education.onlineCourses[course].url).replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	}
};



var projects = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "2009",
			"description" : "lorem ipsum dolor sit amet etc etc etc.",
			"images" : ["http://placehold.it/387x315", "http://placehold.it/387x315"]	
		},
		{
			"title" : "Project 2",
			"dates" : "2010",
			"description" : "lorem ipsum dolor sit amet etc etc etc.",
			"images" : ["http://placehold.it/387x315", "http://placehold.it/387x315"]
		}
	]
};

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
};





bio.display();
work.display();
education.display();
projects.display();

$("#mapDiv").append(googleMap);



