function update_figure_4() {
  var choice = document.getElementById("figure_4_choice").value;
  if ((choice === "AMS-AGY")){
  var filename = "./images/Prelim_data/AMS-AGY/Target/AMS-AGY_1.0_argolight_target_488_epi_with_coherence.png";}
  if ((choice === "Nikon")){
  var filename = "./images/Prelim_data/Nikon/Target/Nikon_0.95_argolight_target_488_epi_with_coherence.png";}
  if ((choice === "AMS-AGY_saturated")){
  var filename = "./images/Prelim_data/AMS-AGY/Target/AMS-AGY_1.0_argolight_target_488_epi_with_coherence_saturated.png";}
  if ((choice === "Nikon_saturated")){
  var filename = "./images/Prelim_data/Nikon/Target/Nikon_0.95_argolight_target_488_epi_with_coherence_saturated.png";} 
  var img = document.getElementById("Figure_4_png");
  img.src = filename;
}

function update_figure_5() {
  var choice = document.getElementById("figure_5_choice").value;
  if ((choice === "AMS-AGY")){
  var filename = "./images/Prelim_data/AMS-AGY/Grid/AMS-AGY_1.0_argolight_grid_488_epi_with_coherence.png";}
  if ((choice === "Nikon")){
  var filename = "./images/Prelim_data/Nikon/Grid/Nikon_0.95_argolight_grid_488_epi_with_coherence.png";}
  var img = document.getElementById("Figure_5_png");
  img.src = filename;
}

function update_figure_6() {
  var objective = document.getElementById("figure_6_choice_objective").value;
  var piezo = document.getElementById("figure_6_choice_piezo").value;
  if ((piezo === "img0000")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";} 
  if ((piezo === "img0001")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0002")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0003")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0004")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0005")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0006")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0007")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0008")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0009")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0010")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0011")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0012")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0013")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0014")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0015")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0016")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0017")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0018")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0019")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}
  if ((piezo === "img0020")){
  var filename = "./images/Prelim_data/" + objective + "/SIM/" + piezo + ".png";}  
  var img = document.getElementById("Figure_6_png");
  img.src = filename;
}

function update_figure_7() {
  var choice = document.getElementById("figure_7_choice").value;
  if ((choice === "AMS-AGY")){
  var filename = "./images/Prelim_data/AMS-AGY/Rings/AMS-AGY_1.0_argolight_3D_rings_488_epi_with_coherence_3D_project.mp4";}
  if ((choice === "Nikon")){
  var filename = "./images/Prelim_data/Nikon/Rings/Nikon_0.95_argolight_3D_rings_488_epi_with_coherence_3D_project.mp4";}
  var img = document.getElementById("Figure_7_vid");
  img.src = filename;
}

function update_figure_8() {
  var choice = document.getElementById("figure_8_choice").value;
  if ((choice === "max_z")){
  var filename = "./images/Prelim_data/AMS-AGY_30/Target/MAX_AMS-AGY_1.0_30_argolight_target_488_epi_with_coherence.png";} 
  if ((choice === "max_z_trans")){
  var filename = "./images/Prelim_data/AMS-AGY_30/Target/MAX_AMS-AGY_1.0_30_argolight_target_488_epi_with_coherence_rescaled.png";} 
  if ((choice === "max_z_trans_sat")){
  var filename = "./images/Prelim_data/AMS-AGY_30/Target/MAX_AMS-AGY_1.0_30_argolight_target_488_epi_with_coherence_saturated.png";} 
  var img = document.getElementById("Figure_8_png");
  img.src = filename;
}

function update_figure_9() {
  var choice = document.getElementById("figure_9_choice").value;
  var video = document.getElementById("Figure_9_vid");
  var picture = document.getElementById("Figure_9_png");
  if ((choice === "stack")){
  var filename = "./images/Prelim_data/AMS-AGY_30/Grid/AMS-AGY_1.0_30_argolight_grid_488_epi_with_coherence_stack.mp4";
  video.style.display = "";
  picture.style.display = "none";} 
  if ((choice === "max_z")){
  var filename = "./images/Prelim_data/AMS-AGY_30/Grid/MAX_AMS-AGY_1.0_30_argolight_grid_488_epi_with_coherence.png";
  video.style.display = "none";
  picture.style.display = "";} 
  if ((choice === "max_z_trans")){
  var filename = "./images/Prelim_data/AMS-AGY_30/Grid/MAX_AMS-AGY_1.0_30_argolight_grid_488_epi_with_coherence_rescaled.png";
  video.style.display = "none";
  picture.style.display = "";} 
  video.src = filename;
  picture.src = filename;
}

function update_figure_10() {
  var choice = document.getElementById("figure_10_choice").value;
  var video = document.getElementById("Figure_10_vid");
  var picture = document.getElementById("Figure_10_png");
  if ((choice === "stack_tilt")){
  var filename = "images/Prelim_data/AMS-AGY_30/SIM_tilt/AMS-AGY_1.0_30_argolight_SIM_tilt_axis_488_epi_with_coherence_stack.mp4";
  var poster = "images/Prelim_data/AMS-AGY_30/SIM_tilt/AMS-AGY_1.0_30_argolight_SIM_tilt_axis_488_epi_with_coherence_stack_poster.png";
  video.style.display = "";
  picture.style.display = "none";} 
  if ((choice === "stack")){
  var filename = "images/Prelim_data/AMS-AGY_30/SIM/AMS-AGY_1.0_30_argolight_SIM_488_epi_with_coherence_stack.mp4";
  var poster = "images/Prelim_data/AMS-AGY_30/SIM/AMS-AGY_1.0_30_argolight_SIM_488_epi_with_coherence_stack_poster.png";
  video.style.display = "";
  picture.style.display = "none";}
  if ((choice === "max_z_tilt")){
  var filename = "./images/Prelim_data/AMS-AGY_30/SIM_tilt/MAX_AMS-AGY_1.0_30_argolight_SIM_tilt_axis_488_epi_with_coherence.png";
  video.style.display = "none";
  picture.style.display = "";}
  if ((choice === "max_z")){
  var filename = "./images/Prelim_data/AMS-AGY_30/SIM/MAX_AMS-AGY_1.0_30_argolight_SIM_488_epi_with_coherence.png";
  video.style.display = "none";
  picture.style.display = "";}
  picture.src = filename;
  video.src = filename;
  video.poster = poster;
}

function update_figure_11() {
  var choice = document.getElementById("figure_11_choice").value;
  var video = document.getElementById("Figure_11_vid");
  if ((choice === "3D_project")){
  var filename = "./images/Prelim_data/AMS-AGY_30/Rings/AMS-AGY_1.0_30_argolight_3D_rings_488_epi_with_coherence_3D_project.mp4";
  var poster = "./images/Prelim_data/AMS-AGY_30/Rings/AMS-AGY_1.0_30_argolight_3D_rings_488_epi_with_coherence_3D_project_poster.png";} 
  if ((choice === "3D_project_trans")){
  var filename = "./images/Prelim_data/AMS-AGY_30/Rings/AMS-AGY_1.0_30_argolight_3D_rings_488_epi_with_coherence_3D_project_transformed.mp4";
  var poster = "./images/Prelim_data/AMS-AGY_30/Rings/AMS-AGY_1.0_30_argolight_3D_rings_488_epi_with_coherence_3D_project_transformed_poster.png";}
  video.src = filename;
  video.poster = poster;
}

function update_figure_12() {
  var orientation = document.getElementById("figure_12_choice_orientation").value;
  var piezo = document.getElementById("figure_12_choice_piezo").value;
  if ((piezo === "img0000")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0001")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0002")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0003")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0004")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0005")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0006")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0007")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0008")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0009")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0010")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0011")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0012")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0013")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0014")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0015")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0016")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0017")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0018")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0019")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0020")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0021")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0022")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0023")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0024")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";} 
  if ((piezo === "img0025")){
  var filename = "./images/Prelim_data/AMS-AGY_30/" + orientation + "/" + piezo + ".png";}   
  var img = document.getElementById("Figure_12_png");
  img.src = filename;
}

function update_tl_choice() {
  var EFL = document.getElementById("tl_choice").value;
  if ((EFL === "EFL129")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL135")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL143")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL150")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL161")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL169")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL179")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL188")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}  
  if ((EFL === "EFL193")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL203")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL214")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL226")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}  
  if ((EFL === "EFL321")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";}
  if ((EFL === "EFL357")){
  var filename = "./images/Tube_lens_assemblies/" + EFL + "_1.0.png";} 
  var img = document.getElementById("tl_assembly_png");
  img.src = filename;
}
