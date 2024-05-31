// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jack
// Created on: 
// This file contains the JS functions for index.html

"use strict"

window.onload = function () {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const radiusSphere = params.get('radiusSphere')
  console.log(radiusSphere)

  // process
  const volumeSphere = (4 / 3) * Math.PI * Math.pow(radiusSphere, 3)
  const dimensions = "<ul>\n<li>Radius of a Sphere = " + radiusSphere + "</li>"

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume').innerHTML = 'Volume is: ' + volumeSphere.toFixed(4) + ' cm³'
}