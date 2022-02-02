import React, { useState, useEffect } from "react";
import Dropdown from "./Dropdowns";

function Selection(props) {
    return(
        <div id="main">
            <div className="user_form">
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Select Company</h4>
                    <Dropdown value={company} id="compSelect" 
                        change = {company_drop} 
                        placeholder = {"Company's Name"}
                        arrayChoices = {company1}/>

                    <div>
                        <label>New Company
                            <input id="company-input" onChange={newCompInput}></input>
                            <button onClick={insertCompanyValue}>Add</button>
                        </label>
                    </div>
                    <h4>You have selected-- {company}</h4>
                </div>


                <div>
                    <h4 style={{ textDecoration: "underline" }}>Select User</h4>
                    <div>
                        <Dropdown value={customerUser} 
                            id="userSelect" 
                            change = {user_drop} 
                            placeholder = {"User"}
                            arrayChoices = {user1}
                        />

                        <div>
                            <label>New User
                                <input id="user-input" onChange={newUserInput}></input>
                                <button onClick={insertUserValue} >Add</button>
                            </label>
                        </div>
                    </div>
                    <h4>You have selected-- {customerUser}</h4>
                </div>
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Select Crop</h4>
                    <Dropdown value={crop} id="cropSelect" 
                        change = {crop_drop} 
                        placeholder = {"Crop's Name"}
                        arrayChoices = {crop1}/>
                    <div>
                        <label>New Crop
                            <input id="crop-input" onChange={newCropInput}></input>
                            <button onClick={insertCropValue} >Add</button>
                        </label>
                    </div>
                    <h4>You have selected-- {crop}</h4>
                </div>

                <div>

                    <h4 style={{ textDecoration: "underline" }}>Select Variety</h4>
                    <Dropdown value={variety} id="varietySelect" 
                        change = {variety_drop} 
                        placeholder = {"Variety's Name"}
                        arrayChoices = {variety1}/>
                    <div>
                        <label>New Variety
                            <input id="variety-input" onChange={newVarietyInput}></input>
                            <button onClick={insertVarietyValue} >Add</button>
                        </label>
                    </div>
                    <h4>You have selected-- {variety}</h4>
                </div>
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Select Machine</h4>
                    <Dropdown value={machine} id="cropSelect" 
                        change = {machine_drop} 
                        placeholder = {"machine's Name"}
                        arrayChoices = {machine1}/>
                    <div>
                        <label>New Machine
                            <input id="machine-input" onChange={newMachineInput}></input>
                            <button onClick={insertMachineValue} >Add</button>
                        </label>
                    </div>
                    <h4>You have selected-- {machine}</h4>
                </div>
            </div>
            
            <div className="option">
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Choose the Mode</h4>
                    {/* <select type="text" onChange={selectedMode} value={value1}>
                        <option>Select</option>
                        <option value="Online">Online</option>
                        <option value="Offline">Offline</option>
                        <option value="Both">Both</option>
                    </select> */}

                    <Dropdown value={value1} id="modeSelect" 
                        change = {selectedMode} 
                        placeholder = {"mode's Name"}
                        staticChoices = {modes}
                        static={"true"}/>

                    <h4>You have selected-- {value1}</h4>
                </div>
                <div>
                    <h4 style={{ textDecoration: "underline" }} style={{ textDecoration: "underline" }}>Choose the Relaese Type</h4>
                    {/* <select onChange={selectedRelease} value={value3}>
                        <option>Select</option>
                        <option>Dev</option>
                        <option>Staging</option>
                        <option>Production</option>
                    </select> */}
                    <Dropdown value={value3} id="releaseSelect" 
                        change = {selectedRelease} 
                        placeholder = {"release's Name"}
                        staticChoices = {releasetypes}
                        static={"true"}/>

                    <h4>You have selected-- {value3}</h4>
                </div>
                <div>
                    <h4 style={{ textDecoration: "underline" }}>Choose the Purpose</h4>
                    {/* <select onChange={selectedPurpose} value={value2}>
                        <option>Select</option>
                        <option>Object Detection</option>
                        <option>Classification</option>
                        <option>Segmentation </option>
                    </select> */}

                    <Dropdown value={value2} id="purposeSelect" 
                        change = {selectedPurpose} 
                        placeholder = {"purpose's Name"}
                        staticChoices = {purposes}
                        static={"true"}/>
                    <h4>You have selected-- {value2}</h4>
                </div>

            </div>
        </div>
    )
}

export default Selection;