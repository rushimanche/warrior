import React , { TextEditor } from 'react'
import { getUser } from '../services/UserService'
import Popup from 'reactjs-popup';
import { Editor } from '@tinymce/tinymce-react';

import 'reactjs-popup/dist/index.css';


const HomeForm = ({onChangeForm, submitForm, handleEditorChange, username}) => {
    username = 'rushimanche';

    const [userData, setUserData] = React.useState([]);
    const [activityCounter, setActivityCounter] = React.useState(0);
    const [awardCounter, setAwardCounter] = React.useState(0);
    
    //toggles divs for each activity/award

    const [activity1show, toggleActivity1] = React.useState(false);
    const [activity2show, toggleActivity2] = React.useState(false);
    const [activity3show, toggleActivity3] = React.useState(false);
    const [activity4show, toggleActivity4] = React.useState(false);
    const [activity5show, toggleActivity5] = React.useState(false);
    const [activity6show, toggleActivity6] = React.useState(false);
    const [activity7show, toggleActivity7] = React.useState(false);
    const [activity8show, toggleActivity8] = React.useState(false);
    const [activity9show, toggleActivity9] = React.useState(false);
    const [activity10show, toggleActivity10] = React.useState(false);
    const [award1show, toggleAward1] = React.useState(false);
    const [award2show, toggleAward2] = React.useState(false);
    const [award3show, toggleAward3] = React.useState(false);
    const [award4show, toggleAward4] = React.useState(false);
    const [award5show, toggleAward5] = React.useState(false);

    var showVariables = {
        ca_activity_1: activity1show,
        ca_activity_2: activity2show,
        ca_activity_3: activity3show,
        ca_activity_4: activity4show,
        ca_activity_5: activity5show,
        ca_activity_6: activity6show,
        ca_activity_7: activity7show,
        ca_activity_8: activity8show,
        ca_activity_9: activity9show,
        ca_activity_10: activity10show,
        ca_award_1: award1show,
        ca_award_2: award2show,
        ca_award_3: award3show,
        ca_award_4: award4show,
        ca_award_5: award5show,
    };

    var showFunctions= {
        ca_activity_1: toggleActivity1,
        ca_activity_2: toggleActivity2,
        ca_activity_3: toggleActivity3,
        ca_activity_4: toggleActivity4,
        ca_activity_5: toggleActivity5,
        ca_activity_6: toggleActivity6,
        ca_activity_7: toggleActivity7,
        ca_activity_8: toggleActivity8,
        ca_activity_9: toggleActivity9,
        ca_activity_10: toggleActivity10,
        ca_award_1: toggleAward1,
        ca_award_2: toggleAward2,
        ca_award_3: toggleAward3,
        ca_award_4: toggleAward4,
        ca_award_5: toggleAward5,
    };

    function addActivity(event) {
        event.preventDefault();
        if (activityCounter < 10) {
            setActivityCounter(prev=> prev+1);
        }
        else {
            alert('Only 10 activities are allowed!')
        }

    }

    function addAward(event) {
        event.preventDefault();
        if (awardCounter < 5) {
            setAwardCounter(prev=> prev+1);
        }
        else {
            alert('Only 5 activities are allowed!')
        }
    }

    function removeActivity(activityName) {
        var data = {"username": username, [activityName]: ""};
        submitForm(data);
        window.location.reload();
    }

    function removeAward(awardName) {
        var data = {"username": username, [awardName]: ""};
        submitForm(data);
        window.location.reload();
    }

    function submitText(content, activityId) {
        handleEditorChange(content, activityId);
    }

    function closeWindow() {
        window.location.reload()
    }
    async function determineCounters() { 
        
        var temp_activity_counter = 0;
        var temp_award_counter = 0;
        var user_data = await getUser(username);
        var activity_1 = user_data['ca_activity_1'];
        var activity_2 = user_data['ca_activity_2'];
        var activity_3 = user_data['ca_activity_3'];
        var activity_4 = user_data['ca_activity_4'];
        var activity_5 = user_data['ca_activity_5'];
        var activity_6 = user_data['ca_activity_6'];
        var activity_7 = user_data['ca_activity_7'];
        var activity_8 = user_data['ca_activity_8'];
        var activity_9 = user_data['ca_activity_9'];
        var activity_10 = user_data['ca_activity_10'];
        var award_1 = user_data['ca_award_1'];
        var award_2 = user_data['ca_award_2'];
        var award_3 = user_data['ca_award_3'];
        var award_4 = user_data['ca_award_4'];
        var award_5 = user_data['ca_award_5'];

        if(activity_1) {
            temp_activity_counter++; 
        }
        if(activity_2) {
            temp_activity_counter++; 
        }
        if(activity_3) {
            temp_activity_counter++; 
        }
        if(activity_4) {
            temp_activity_counter++; 
        }
        if(activity_5) {
            temp_activity_counter++; 
        }
        if(activity_6) {
            temp_activity_counter++; 
        }
        if(activity_7) {
            temp_activity_counter++; 
        }
        if(activity_8) {
            temp_activity_counter++; 
        }
        if(activity_9) {
            temp_activity_counter++; 
        }
        if(activity_10) {
            temp_activity_counter++; 
        }
        if(award_1) {
            temp_award_counter++; 
        }
        if(award_2) {
            temp_award_counter++; 
        }
        if(award_3) {
            temp_award_counter++; 
        }
        if(award_4) {
            temp_award_counter++; 
        }
        if(award_5) {
            temp_award_counter++; 
        }

        return([temp_activity_counter, temp_award_counter, user_data]);
    }   

    React.useEffect(() => { 
        determineCounters()
        .then(response => {
            setActivityCounter(response[0])
            setAwardCounter(response[1])
            setUserData(response[2])
        });
        }, 
        []
    )

    return(
        <React.Fragment>
            <div className="app-container">
                <form id="activity-tracker">
                    <div className="activity-section">
                        <br />
                        <div className="activity-section-title">
                            <h5>Activities</h5>
                        </div>
                        {Array.from({ length: activityCounter }, (_unused, index) => index + 1).map(
                            (activityIndex) => {
                                const activityId = `ca_activity_${activityIndex}`
                                return (
                                    <div>
                                        <div key={activityId} className="user-box">
                                        <span className="expand-more">
                                                <a onClick={() => showFunctions[activityId](!showVariables[activityId])} href="javascript:void(0)">
                                                    <span className="material-icons">
                                                        expand_more
                                                    </span>
                                            
                                                </a>
                                            </span>
                                            <span className="user-box-title">
                                                {userData[activityId]}
                                            </span>
                                            <span className="remove-box">
                                                <a onClick={() => removeActivity(activityId)} href="javascript:void(0)">
                                                    <span className="material-icons">
                                                        highlight_off
                                                    </span>
                                                </a>
                                            </span>
                                            
                                            <br />
                                        </div>
                                        <div>
                                            {showVariables[activityId] && 
                                                <div className="user-description-box">
                                                    <div className="user-description-box-title-header">
                                                        Title
                                                    </div>
                                                    <Popup trigger={
                                                            <a href="javascript:void(0)">
                                                                <span className="material-icons-outlined">
                                                                    edit
                                                                </span>
                                                            </a>
                                                    } modal>
                                                    <a className="material-icons close" onClick={closeWindow}>
                                                        highlight_off
                                                    </a>
                                                    <form>
                                                        <Editor
                                                            initialValue={"<p>" + userData[activityId] + "</p>"}
                                                            apiKey='chvt2osuiwef6lgje0f4y4441yry6sro2obje3q05npvs8jf'
                                                            init={{
                                                                height: 500,    
                                                                menubar: false,
                                                                plugins: [
                                                                    'save advlist autolink lists link image charmap print preview anchor',
                                                                    'searchreplace visualblocks code fullscreen',
                                                                    'insertdatetime media table paste code help wordcount'
                                                                ],
                                                                toolbar: [
                                                                    'undo redo | save'
                                                                    
                                                                ],

                                                                save_onsavecallback: function () { submitText(tinymce.activeEditor.getContent().replace(/<[^>]+>/g, ''), activityId) }
                                                            }}
                                                        />
                                                    </form>
                                                    </Popup>
                                                    <div className="user-description-box-title"> 
                                                    {userData[activityId]}
                                                    </div>
                                                </div>
                                            
                                            
                                            }
                                        </div>
                                    </div>
                                )
                            },
                        )}

                    <br />
                    <span className="user-activity-add">
                        <button className="big-button" onClick={addActivity}><span className="material-icons">sports_basketball</span>  Add Activity</button>
                    </span> 
                    <br />
                    <br /> 
                    </div>

                    <div className="award-section">
                        <br />
                        <div className="award-section-title">
                            <h5>Awards</h5>
                        </div>
                        {Array.from({ length: awardCounter }, (_unused, index) => index + 1).map(
                            (awardIndex) => {
                                const awardId = `ca_award_${awardIndex}`
                                return (
                                    <div key={awardId} className="user-box">
                                        <span className="expand-more">
                                        </span>
                                        <span className="user-box-title">
                                            {userData[awardId]}
                                        </span>
                                        <span className="remove-box">
                                            <a onClick={() => removeAward(awardId)} href="javascript:void(0)">
                                                <span className="material-icons">
                                                    highlight_off
                                                </span>
                                            </a>
                                        </span>
                                        <br />
                                    </div>
                                )
                            },
                        )}
                    </div>
                    <br /> 
                    <span className="user-award-add">
                        <button className="big-button" onClick={addAward}><span className="material-icons">emoji_events</span>  Add Award &nbsp;   </button>
                    </span>   
                    <br />
                        <a className="user-submit" onClick= {(e) => submitForm()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Submit
                    </a>
                </form>
            </div>
        </React.Fragment>
    )
}
export default HomeForm