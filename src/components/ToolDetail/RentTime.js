import React, {Component} from "react";
import axios from "axios";
// import {Link} from "react-router-dom";
import { sendUser } from '../../redux/reducer';
import { sendTool} from '../../redux/reducer';
import { connect } from 'react-redux';
import Datepicker from "../Datepicker";


class RentTime extends Component {
    constructor() {
        super();

        this.state = {
           user_id:1,
           tool_id: "",
           date:"",
           duration:""
        }

   
   

    }

   

    componentDidUpdate() { 
        if(this.props.location.pathname === "/") {
            this.reset();
        }
    }

    updateState(time, e) {
        this.setState({
            [time]: e.target.value
        })
    }

    reset() {
        this.setState({
         date: "",
         duration: ""
             
    })
    }
 
    // connect to reducer on this page
    // send duration and date through state (same as you currently are)
    // send user_id and tool_id through props
    createpending() {
        const tool_id =  this.props.match.params.tool_id
        const user_id = this.state.user_id
        const { duration, date} = this.state

        axios.post(`/api/pending`, { user_id, tool_id, duration,date })
        .then(response => {
            this.reset();
        })
    }
    
    render() {
         console.log(this.props.match.params.tool_id)
         console.log(this.state)
        return (
          
            <div className="dateform">
              <p>

                    {/* <div className="w-25 py-5 my-5 mx-auto" style={{ minWidth: "20%" }}> */}
                   
            <h3>Pick a date for booking : </h3>
            <h2>Enter in year-month-day format (2018-11-09) </h2>
                    <input type="text" value={this.state.date} onChange={(e) => this.updateState("date", e)}/><br/>
                    <h2>Enter in how long you need to rent for (DD:HH:MM) </h2>
             <input type="text" value={this.state.duration} onChange={(e) => this.updateState("duration", e)}/><br/>
            </p>
            <div className="formContainer">
                
                </div>
                <button onClick={(e) => this.createpending()}>Request now</button>      
                
                <div className="w-10 py-5 my-5 mx-auto" style={{  Width: "500px" }}>
        <Datepicker label="Find a date" value="2018-11-27" />
      </div>

            </div>
             
        )
    }
}

function mapStateToProps(state) {
    const { user_id, tool_id } = state;
    return {
        user_id: user_id,
        tool_id: tool_id
    
}}
export default connect(mapStateToProps, { sendUser, sendTool })(RentTime);


// function(g) {
//     var h = {
//         en: {
//             day: "day",
//             hour: "hour",
//             minute: "minute",
//             second: "second",
//             days: "days",
//             hours: "hours",
//             minutes: "minutes",
//             seconds: "seconds"
//         },
//         es: {
//             day: "d&iacute;a",
//             hour: "hora",
//             minute: "minuto",
//             second: "segundo",
//             days: "d&iacute;s",
//             hours: "horas",
//             minutes: "minutos",
//             seconds: "segundos"
//         }
//     };
//     g.fn.durationPicker = function(m) {
//         var a = 0,
//             b = g.extend({}, {
//                 lang: "en",
//                 max: 59,
//                 checkRanges: !1,
//                 totalMax: 31556952E3,
//                 totalMin: 6E4,
//                 showSeconds: !1,
//                 showDays: !0
//             }, m);
//         this.each(function(m, q) {
//             function e(a, b) {
//                 return '<div class="bdp-block ' + (b ?
//                     "hidden" : "") + '"><span id="bdp-' + a + '"></span><br><span class="bdp-label" id="' + a + '_label"></span></div>'
//             }

//             function n() {
//                 $mainInput.val() || $mainInput.val(0);
//                 moment.locale(b.lang);
//                 a = moment.duration(parseInt($mainInput.val(), 10));
//                 p();
//                 l || (d.days.val(a.days()), d.hours.val(a.hours()), d.minutes.val(a.minutes()), d.seconds.val(a.seconds()))
//             }

//             function r() {
//                 a = moment.duration({
//                     seconds: parseInt(d.seconds.val()),
//                     minutes: parseInt(d.minutes.val()),
//                     hours: parseInt(d.hours.val()),
//                     days: parseInt(d.days.val())
//                 });
//                 p();
//                 $mainInput.val(a.asMilliseconds());
//                 $mainInput.change()
//             }

//             function k(a, c, f) {
//                 var e = g('<input class="form-control input-sm" type="number" min="0" value="0">').change(r);
//                 f && e.attr("max", f);
//                 d[a] = e;
//                 a = g("<div> " + h[b.lang][a] + "</div>");
//                 c && a.addClass("hidden");
//                 return a.prepend(e)
//             }

//             function p() {
//                 b.checkRanges && (a = a.asMilliseconds() > b.totalMax ? moment.duration(b.totalMax) : a, a = a.asMilliseconds() < b.totalMin ? moment.duration(b.totalMin) : a);
//                 c.find("#bdp-days").text(a.days());
//                 c.find("#bdp-hours").text(a.hours());
//                 c.find("#bdp-minutes").text(a.minutes());
//                 c.find("#bdp-seconds").text(a.seconds());
//                 c.find("#days_label").text(h[b.lang][1 == a.days() ? "day" : "days"]);
//                 c.find("#hours_label").text(h[b.lang][1 == a.hours() ? "hour" : "hours"]);
//                 c.find("#minutes_label").text(h[b.lang][1 == a.minutes() ? "minute" : "minutes"]);
//                 c.find("#seconds_label").text(h[b.lang][1 == a.seconds() ? "second" : "seconds"])
//             }
//             $mainInput = g(q);
//             if ("1" !== $mainInput.data("bdp")) {
//                 var c = g('<div class="bdp-input"></div>');
//                 c.append(e("days", !b.showDays));
//                 c.append(e("hours"));
//                 c.append(e("minutes"));
//                 c.append(e("seconds",
//                     !b.showSeconds));
//                 $mainInput.after(c).hide().data("bdp", "1");
//                 var d = [],
//                     l = !1;
//                 if ($mainInput.hasClass("disabled") || "disabled" == $mainInput.attr("disabled")) l = !0, c.addClass("disabled");
//                 if (!l) {
//                     var f = g('<div class="bdp-popover"></div>');
//                     k("days", !b.showDays).appendTo(f);
//                     k("hours", !1, 23).appendTo(f);
//                     k("minutes", !1, 59).appendTo(f);
//                     k("seconds", !b.showSeconds, 59).appendTo(f);
//                     c.popover({
//                         placement: "bottom",
//                         trigger: "click",
//                         html: !0,
//                         content: f
//                     })
//                 }
//                 n();
//                 $mainInput.change(n)
//             }
//         })
//     }


// $(function() {
//     $('#duration').durationPicker();
//     $('#duration2').durationPicker({
//         showSeconds: true,
//         checkRanges: true,
//         totalMax: 259200000 /* 3 days */
//     });
// })}