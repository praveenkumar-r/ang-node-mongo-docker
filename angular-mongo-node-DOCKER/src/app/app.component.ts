import { Component, ChangeDetectorRef } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

declare var gapi: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-mongo-node-DOCKER";
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  auth() {
    debugger;
    var oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

    // Create <form> element to submit parameters to OAuth 2.0 endpoint.
    var form = document.createElement("form");
    form.setAttribute("method", "GET"); // Send as a GET request.
    form.setAttribute("action", oauth2Endpoint);

    // Parameters to pass to OAuth 2.0 endpoint.
    var params = {
      client_id:
        "135893097194-rp88o7v3hf0mu5d6phanpq7thuu8ou06.apps.googleusercontent.com",
      redirect_uri: "http://localhost:8084",
      response_type: "token",
      scope: "https://www.googleapis.com/auth/calendar.events",
      include_granted_scopes: "true",
      state: "pass-through value",
    };

    // Add form parameters as hidden input values.
    for (var p in params) {
      var input = document.createElement("input");
      input.setAttribute("type", "hidden");
      input.setAttribute("name", p);
      input.setAttribute("value", params[p]);
      form.appendChild(input);
    }

    // Add form to page and submit it to open the OAuth 2.0 endpoint.
    document.body.appendChild(form);
    form.submit();
  }

  addCalendar() {
    var CLIENT_ID =
      "135893097194-rp88o7v3hf0mu5d6phanpq7thuu8ou06.apps.googleusercontent.com";
    var API_KEY = "AIzaSyCd0kHfGAFEq9iyxElFFPuz9HWyndJV3L8";

    // Array of API discovery doc URLs for APIs used by the quickstart
    var DISCOVERY_DOCS = [
      "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
    ];

    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    var SCOPES = "https://www.googleapis.com/auth/calendar.events";
    /**
     *  On load, called to load the auth2 library and API client library.
     */
    debugger;
    gapi.load("client:auth2", initClient);

    /**
     *  Initializes the API client library and sets up sign-in state
     *  listeners.
     */
    function initClient() {
      gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        .then(
          function () {
            // Listen for sign-in state changes.
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

            // Handle the initial sign-in state.
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          },
          function (error) {
            appendPre(JSON.stringify(error, null, 2));
          }
        );
    }

    /**
     *  Called when the signed in status changes, to update the UI
     *  appropriately. After a sign-in, the API is called.
     */
    function updateSigninStatus(isSignedIn) {
      if (isSignedIn) {
        // listUpcomingEvents();
        postAnEvent();
      } else {
        handleAuthClick();
      }
    }

    /**
     *  Sign in the user upon button click.
     */
    function handleAuthClick() {
      gapi.auth2.getAuthInstance().signIn();
    }

    /**
     *  Sign out the user upon button click.
     */
    function handleSignoutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }

    /**
     * Append a pre element to the body containing the given message
     * as its text node. Used to display the results of the API call.
     *
     * @param {string} message Text to be placed in pre element.
     */
    function appendPre(message) {
      var pre = document.getElementById("content");
      var textContent = document.createTextNode(message + "\n");
      pre.appendChild(textContent);
    }

    /**
     * Print the summary and start datetime/date of the next ten events in
     * the authorized user's calendar. If no events are found an
     * appropriate message is printed.
     */
    function listUpcomingEvents() {
      gapi.client.calendar.events
        .list({
          calendarId: "primary",
          timeMin: new Date().toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: "startTime",
        })
        .then(function (response) {
          var events = response.result.items;
          appendPre("Upcoming events:");

          if (events.length > 0) {
            for (let i = 0; i < events.length; i++) {
              var event = events[i];
              var when = event.start.dateTime;
              if (!when) {
                when = event.start.date;
              }
              appendPre(event.summary + " (" + when + ")");
            }
          } else {
            appendPre("No upcoming events found.");
          }
        });
    }

    function postAnEvent() {
      var event = {
        summary: "Praveen Test",
        location: "Navalar Street,Pammal,Chennai-75",
        description: "A chance to hear more about Google's developer products.",
        start: {
          dateTime: "2020-06-14T06:00:00",
          timeZone: "Asia/Calcutta",
        },
        end: {
          dateTime: "2020-06-14T08:00:00",
          timeZone: "Asia/Calcutta",
        },
        attendees: [
          { email: "lpage@example.com" },
          { email: "sbrin@example.com" },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      };

      var request = gapi.client.calendar.events.insert({
        calendarId: "primary",
        resource: event,
      });

      request.execute(function (event) {
        console.log("Event created: " + event.htmlLink);
      });
    }
  }
}
