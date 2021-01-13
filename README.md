# Platformer-example

To test this Foundry Project do:

`git clone --recursive https://github.com/Foundry2d-Templates/platformer-example.git`
 

While in Libraries folder clone the foundsdk:

`git clone --recursive https://github.com/foundry2D/foundsdk.git`

To make sure everything is there, cd into foundsdk and:
```
cd foundsdk
//For developement to get the most up to date 
git submodule foreach git pull origin master
//To get the stable release version of the SDK
git submodule update --init --recursive

```

When doing a project with foundry make sure to add your [Traits](https://github.com/foundry2D/foundry2d/wiki/Traits)/class that extend Trait in the gameplay folder of the Sources folder and uncomment this in the khafile.js:
```
// Gameplay code should reside in the gameplay folder of the Sources folder at the root
// Add these parameters to make sure your Traits aren't removed by dead code elimination 
// project.addParameter('gameplay');
// project.addParameter("--macro keep('gameplay')");
```
If you don't have any gameplay code yet and you just want to get started, don't uncomment the lines and just build with F5.
