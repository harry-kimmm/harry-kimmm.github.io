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
          <IconButton href="/harry-kimmm.github.io/src/images/Harry_Kim.pdf" target="_blank"><FeedIcon style={{ color: 'white' }} /></IconButton>
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
                    image="src/images/a-plus-i-img.png"
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
                    image="src/images/vendingmachine-img.png"
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
                    image="src/images/eunited-img.png"
                    title="Engineering United"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Engineering United Website
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Website built using Three.js for 3D graphics made for my club which provides details of the club and allows viewers to sign up
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
                    image="src/images/personal-portfolio-img.png"
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
                    AP Courses
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Cypress High School
                  </Typography>
                  <Typography variant="body3">
                    AP Computer Science A, AP Computer Science Principles, AP Physics C: Mechanics, AP English Language and Composition, AP United States History, AP European History.
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
