import { CssBaseline, Typography } from "@material-ui/core"
import ChevronLeftRounded from "@material-ui/icons/ChevronLeftRounded"
import React, { Component } from "react"
import "./App.css"
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded"

class App extends Component {
  render() {
    return (
      <>
        <CssBaseline />

        <div className="container">
          <div className="content-left" />

          <div className="content-right" />

          <div className="content-right-title">
            <Typography
              variant="h3"
              style={{ color: "white", textShadow: "1px 1px #999999" }}
            >
              Bottle Grinder Small
            </Typography>
            <Typography
              variant="h3"
              style={{
                paddingTop: 30,
                color: "#303030",
                textShadow: "1px 1px black"
              }}
            >
              $49.90
            </Typography>
          </div>

          <div className="content-right-description">
            <Typography
              variant="subtitle2"
              style={{ color: "white", textShadow: "1px 1px #999999" }}
            >
              These Menu Bottle Grinders Set Of Two can be used for salt, pepper
              and spices - or anything else you desire
            </Typography>
          </div>

          <div className="header-title">
            <Typography variant="title">forhome</Typography>
          </div>

          <div className="header-selection-left">
            <Typography variant="subtitle2" style={{ color: "white" }}>
              home & garden
            </Typography>
          </div>

          <div className="header-selection-left-center">
            <Typography variant="subtitle2" style={{ color: "white" }}>
              shop by room
            </Typography>
          </div>

          <div className="header-selection-right-center">
            <Typography variant="subtitle2" style={{ color: "white" }}>
              decor
            </Typography>
          </div>

          <div className="header-selection-right">
            <Typography variant="subtitle2" style={{ color: "white" }}>
              furniture
            </Typography>
          </div>

          <div className="footer-selection-left">
            <Typography variant="subtitle2">
              Blue and White Small Carbon
            </Typography>
            <Typography variant="subtitle2">$29.99</Typography>
          </div>

          <div className="footer-selection-center">
            <Typography variant="subtitle2">
              Set Two Small Carbon/Ash Weed Lida
            </Typography>
            <Typography variant="subtitle2" style={{ color: "#303030" }}>
              $49.90
            </Typography>
          </div>

          <div className="footer-selection-right">
            <Typography variant="subtitle2">
              Pinky and White Large Carbon
            </Typography>
            <Typography variant="subtitle2">$54.99</Typography>
          </div>

          <div className="content-left-chevron-left">
            <Typography variant="h5" style={{ color: "#303030" }}>
              <ChevronLeftRounded
                style={{ display: "grid", alignItems: "center" }}
              />
            </Typography>
          </div>

          <div className="content-left-chevron-right">
            <ChevronRightRounded
              style={{ display: "grid", alignItems: "center" }}
            />
          </div>

          <div className="content-left-identifier">
            <Typography
              variant="h3"
              style={{ color: "#303030", textShadow: "1px 1px black" }}
            >
              02
            </Typography>
          </div>

          <div className="header-search">
            <Typography variant="button">search</Typography>
          </div>

          <div className="hamburger-menu">
            <Typography variant="display1">=</Typography>
          </div>
        </div>
      </>
    )
  }
}

export default App
