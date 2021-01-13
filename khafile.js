let project = new Project('Project');
project.addAssets('Assets/**');
project.addSources('Sources');
project.addShaders('Shaders/**');
project.addParameter("-debug");

// Gameplay code should reside in the gameplay folder of the Sources folder at the root
// Add these parameters to make sure your Traits aren't removed by dead code elimination 
// project.addParameter('gameplay');
// project.addParameter("--macro keep('gameplay')");

// project.addParameter("--times");
// project.addDefine('macro-times');

project.targetOptions.html5.disableContextMenu = true;
project.targetOptions.html5.webgl = true;
//Comment these lines when you want to go in release mode:
await project.addProject('Libraries/foundsdk/khafs');
await project.addProject('Libraries/foundsdk/editor');
//end comment
await project.addProject('Libraries/foundsdk/foundry2d');
resolve(project);
