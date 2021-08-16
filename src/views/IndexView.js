/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=6112ac0373e74d0d7a5359df").then(body => body.text()), isAsync: false },
  { loading: fetch("js/webflow.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '6112ac0373e74d86125359de'
    htmlEl.dataset['wfSite'] = '6112ac0373e74d0d7a5359df'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/sweetrelief-main-d7e246ce3b389e211b3e11.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div id="Main" className="af-class-section af-class-wf-section">
              <div id="Intro" className="af-class-container w-container">
                <div className="af-class-columns-2 w-row">
                  <div className="af-class-column-3 w-col w-col-6 w-col-small-small-stack">
                    <h1 className="af-class-heading af-class-big-header">SweetRelief</h1>
                    <p className="af-class-paragraph af-class-med-text">Find Restrooms.<br />Discover Local Businesses.</p>
                    <p className="af-class-paragraph-2">Finding a restroom in the city can be tough. Finding new customers can be even tougher. SweetRelief is connecting awesome businesses with awesome people through the power of the potty!</p>
                  </div>
                  <div className="af-class-column-4 w-col w-col-6 w-col-small-small-stack"><img src="images/Logo-Mockup.png" loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 87vw, (max-width: 991px) 44vw, (max-width: 1279px) 45vw, 49vw" srcSet="images/Logo-Mockup-p-500.png 500w, images/Logo-Mockup-p-800.png 800w, images/Logo-Mockup-p-1080.png 1080w, images/Logo-Mockup-p-1600.png 1600w, images/Logo-Mockup.png 1728w" alt className="af-class-image-4" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-section-4 af-class-wf-section">
              <div className="af-class-container-3 w-container">
                <p className="af-class-paragraph-5">The stigma against homelessness is part of the reason why the world doesn't have more public restrooms. We don't like that at all, so we're donating 1% of all of our revenues to organizations serving the homeless. </p>
              </div>
            </div>
            <div id="Product" className="af-class-wf-section">
              <div id="Pay-Cont" className="af-class-container-2 af-class-pay-cont w-container">
                <div className="af-class-columns-4 w-row">
                  <div className="af-class-column-8 w-col w-col-6"><img src="images/PayMockSideways.png" loading="lazy" sizes="(max-width: 479px) 75vw, (max-width: 767px) 360px, (max-width: 1279px) 45vw, 450px" srcSet="images/PayMockSideways-p-500.png 500w, images/PayMockSideways-p-800.png 800w, images/PayMockSideways-p-1080.png 1080w, images/PayMockSideways-p-1600.png 1600w, images/PayMockSideways.png 1728w" alt className="af-class-image" /></div>
                  <div className="af-class-column-7 w-col w-col-6">
                    <p className="af-class-paragraph-3 af-class-purp-title">Pay</p>
                    <p className="af-class-paragraph-4">No more scanning the menu for the cheapest item to buy!&nbsp;Pay for just the restroom. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-wf-section">
              <div className="af-class-container-2 af-class-discover-cont w-container">
                <div className="af-class-columns-3 af-class-discover-column w-row">
                  <div className="af-class-column-10 w-col w-col-6">
                    <p className="af-class-paragraph-3 af-class-honeyd-title">Discover<br /></p>
                    <p className="af-class-paragraph-4">Find exciting happy hours, events, and promotions at businesses you might never have heard of. </p>
                  </div>
                  <div className="af-class-column-11 w-col w-col-6"><img src="images/DisoverStacked1.png" loading="lazy" sizes="(max-width: 767px) 79vw, (max-width: 1279px) 45vw, 457.5px" height={800} srcSet="images/DisoverStacked1-p-500.png 500w, images/DisoverStacked1-p-800.png 800w, images/DisoverStacked1-p-1080.png 1080w, images/DisoverStacked1.png 1728w" alt className="af-class-image-2" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-section-3 af-class-wf-section">
              <div className="af-class-container-2 af-class-filter-cont w-container">
                <div className="af-class-columns-3 w-row">
                  <div className="af-class-column-5 w-col w-col-6">
                    <p className="af-class-paragraph-3">Filter</p>
                    <p className="af-class-paragraph-4">Easily sift through 600+&nbsp;real locations with filters designed to fit your needs. </p>
                  </div>
                  <div className="af-class-column-6 w-col w-col-6"><img src="images/testMain.png" loading="lazy" sizes="(max-width: 767px) 75vw, (max-width: 1279px) 43vw, 525px" srcSet="images/testMain-p-800.png 800w, images/testMain-p-1080.png 1080w, images/testMain-p-1600.png 1600w, images/testMain.png 1728w" alt className="af-class-image-3" /></div>
                </div>
              </div>
            </div>
            <div className="af-class-wf-section">
              <div className="af-class-container-2 af-class-coral-bg w-container">
                <div className="af-class-columns-3 w-row">
                  <div className="af-class-column-13 w-col w-col-6"><img src="images/Comment-Test-Stacked.png" loading="lazy" sizes="(max-width: 767px) 79vw, (max-width: 1279px) 45vw, 457.5px" height={800} srcSet="images/Comment-Test-Stacked-p-500.png 500w, images/Comment-Test-Stacked-p-800.png 800w, images/Comment-Test-Stacked-p-1080.png 1080w, images/Comment-Test-Stacked-p-1600.png 1600w, images/Comment-Test-Stacked.png 1728w" alt className="af-class-image-2" /></div>
                  <div className="af-class-column-9 w-col w-col-6">
                    <p className="af-class-paragraph-3 af-class-coral-title">Comment</p>
                    <p className="af-class-paragraph-4">See before you pee!&nbsp;Stay informed and let others know about your experience.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */