import { useState } from 'react'
import './App.css'

import { Box, ButtonGroup, Button, IconButton, Grid, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FeedIcon from '@mui/icons-material/Feed';

import ScrollAnimation from 'react-animate-on-scroll';

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollAnimation animateIn="fadeInDown" animateOnce="true" duration="1">

        <Box sx={{ fontSize: 125, fontWeight: 'bold', mt: 40 }}>Harry Kim</Box>
        <Box sx={{ fontSize: 30 }}>harryk9395@gmail.com</Box>
        <ButtonGroup size="large" aria-label="large button group">
          <IconButton href="https://github.com/harry-kimmm" target="_blank"><GitHubIcon style={{ color: 'white' }} /></IconButton>
          <IconButton href="https://www.linkedin.com/in/harrykimm/" target="_blank"><LinkedInIcon style={{ color: 'white' }} /></IconButton>
          <IconButton href="https://drive.google.com/file/d/1nSleKzKCtVI8u9bewquo940_vOzNdKFc/view?usp=sharing" target="_blank"><FeedIcon style={{ color: 'white' }} /></IconButton>
        </ButtonGroup >
      </ScrollAnimation>

      <Box sx={{ width: '100.4%' }} className="projects">
        <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="0.5">
          <Box sx={{ fontSize: 50, fontWeight: 'bold', mt: 60 }}>Projects</Box>
        </ScrollAnimation>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            <Grid item xs="auto">
              <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="0.5">
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 250 }}
                    image="https://i.imgur.com/ESXXzCt.png"
                    title="A+I"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      A+I
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Webapp built with React using OpenAI's API to generate practice tests for a variety of subjects with a homepage & generation page
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="https://github.com/harry-kimmm/aplusi" target="_blank" size="small">Github</Button>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>
            <Grid item xs="auto">
              <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="0.5">
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 250 }}
                    image="https://i.imgur.com/tSzJDXR.png"
                    title="Ninja Platformer"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ninja Platformer
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      2D Tile-based Platformer game with a fully animated playable ninja character. Developed entirely in Python using Pygame
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="https://github.com/harry-kimmm/ninja_platformer" target="_blank" size="small">Github</Button>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>
            <Grid item xs="auto">
              <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="0.5">
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 250 }}
                    image="https://i.imgur.com/RLYhAJY.png"
                    title="Vending Machine"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Vending Machine
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Java Vending Machine application that uses Java Swing for to display a GUI with buying and restocking functionality
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="https://github.com/harry-kimmm/vendingmachine" target="_blank" size="small">Github</Button>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>
            <Grid item xs="auto">
              <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="0.5">
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 250 }}
                    image="https://i.imgur.com/eJ94VYk.png"
                    title="Engineering United"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Engineering United Website
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Website built using Three.js for 3D graphics made for my club which provides details of the club and allows viewers to sign up.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="https://github.com/harry-kimmm/engineeringunited" target="_blank" size="small">Github</Button> <Button href="https://engineeringunited.org" target="_blank" size="small">View</Button>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>
            <Grid item xs="auto">
              <ScrollAnimation animateIn="fadeInRight" animateOnce="true" duration="0.5">
                <Card sx={{ maxWidth: 600 }}>
                  <CardMedia
                    sx={{ height: 250 }}
                    image="https://i.imgur.com/deHmgpd.png"
                    title="Personal Website"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Personal Website
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Personal website built with React. Most components of this website are built using the Material UI library.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href="https://github.com/harry-kimmm/harry-kimmm.github.io" target="_blank" size="small">Github</Button>
                  </CardActions>
                </Card>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box sx={{ width: 1 }} className="academics">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="0.5">
          <Box sx={{ fontSize: 50, fontWeight: 'bold', mt: 10 }}>Academics</Box>
        </ScrollAnimation>
        <Grid container spacing={2}
          alignItems="center"
          justifyContent="center"
          sx={{ mt: 3 }}>
          <Grid item xs="auto">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="0.5">
              <Card sx={{ maxWidth: 450, minHeight: 230 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Math 171
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Fullerton College
                  </Typography>
                  <Typography variant="body3">
                    Discrete Mathematics. Topics include include logic, truth tables, Boolean algebra, logic circuits, elementary set theory, functions, relations, proof techniques, combinatorics, elementary probability, and recurrence relations.
                  </Typography>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </Grid>

          <Grid item xs="auto">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="0.5">
              <Card sx={{ maxWidth: 450, minHeight: 230 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Math 172
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Fullerton College
                  </Typography>
                  <Typography variant="body3">
                    Graph Theory and Linear Algebra. Topics include the theory of graphs, trees, finite state machines, and linear algebra including matrix operations, eigenvalues, vector spaces, linear transformations, and inner product spaces.
                  </Typography>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </Grid>
          <Grid item xs="auto">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="0.5">
              <Card sx={{ maxWidth: 450, minHeight: 230 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    CS50
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Harvard Online
                  </Typography>
                  <Typography variant="body3">
                    Introduction to Computer Science. Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development. 
                  </Typography>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </Grid>
          <Grid item xs="auto">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="0.5">
              <Card sx={{ maxWidth: 450, minHeight: 230 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Web Development Class
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Bitwise Industries
                  </Typography>
                  <Typography variant="body3">
                    8-week pre-apprenticeship hands-on project-based class. Class went over fundamentals of HTML and CSS to build web pages.
                  </Typography>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </Grid>
          <Grid item xs="auto">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="0.5">
              <Card sx={{ maxWidth: 450, minHeight: 230 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Python Professional Certificate
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Coursera
                  </Typography>
                  <Typography variant="body3">
                    Troubleshooting and Debugging Techniques, Introduction to Git and GitHub, Using Python to Interact with the Operating System, Configuration Management and the Cloud, Crash Course on Python, Automating Real-World Tasks with Python
                  </Typography>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </Grid>
          <Grid item xs="auto">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce="true" duration="0.5">
              <Card sx={{ maxWidth: 450, minHeight: 230 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    AP Courses
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cypress High School
                  </Typography>
                  <Typography variant="body3">
                    Computer Science A, Computer Science Principles, Calculus BC, Statistics, Physics C: Mechanics, English Language and Composition, English Literature and Composition, US Government and Politics, United States History, European History
                  </Typography>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </Grid>
        </Grid>

      </Box>
      <footer>© Harry Kim 2023</footer>
    </>
  )
}

export default App
