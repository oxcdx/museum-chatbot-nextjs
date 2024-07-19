//@ts-nocheck
import { useEffect, useState, useRef } from 'react'
import $ from 'jquery'
import Router from "next/router"
import Script from 'next/script'

import NonSSRWrapper from "components/non-ssr-wrapper"
import dynamic from "next/dynamic"
// import '@google/model-viewer/dist/model-viewer';



interface ChatPanelProps {
  chatMode: boolean
}

export function ChatPanel({ chatMode, ...props }: ChatPanelProps) {
  const chatHistoryRef = useRef(null)
  const [htmlContent, setHtmlContent] = useState('');

  const [startedOnce, setStartedOnce] = useState<boolean>(false)
  const [windowDefined, setWindowDefined] = useState<boolean>(false)



  useEffect(() => {
    let intervalId;

    if (!windowDefined) {
      intervalId = setInterval(() => {
        if (typeof window !== 'undefined') {
          clearInterval(intervalId); // Clear interval once window is defined
          setWindowDefined(true);
          import('@google/model-viewer/dist/model-viewer')
            .then((modelViewer) => {
              // Use modelViewer here
            })
            .catch((err) => {
              console.error('Failed to load module', err);
            });
        }
      }, 1000); // Check every second
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId); // Cleanup interval on component unmount
      }
    };
  }, [chatMode])

  useEffect(() => {
    // If chatMode is false, return
    // if (!chatMode) return;

    // Fetch the HTML content from a file
    fetch('/chatContent.html')
      .then(response => response.text())
      .then(data => {
        // get only the tw-story element and minify it
        const start = data.indexOf('<tw-storydata');
        const end = data.indexOf('</tw-storydata>') + 15;
        data = data.substring(start, end);
        
        setHtmlContent(data);
      })
      .catch(error => {
        console.error('Failed to load HTML content', error);
      });
  }, [chatMode])

  useEffect(() => {
    //if chatMode is false, return
    if (!chatMode) return

    // Fetch or generate your HTML content here
    const fetchedContent = ''

    // if htmlContent is empty, set the htmlContent with fetchedContent
    // if (htmlContent === '') {
    //     setHtmlContent(fetchedContent);
    // }

    

    if (!startedOnce) {

      //wait till dom is ready then run the code below with an event listener
      


      const script = document.createElement('script');
      const script2 = document.createElement('script');

      script.src = '/js/custom-trialogue.js';
      script.async = true;

      script2.textContent = `      
        let responsePanel = document.querySelector("#user-response-panel");

        let hasBeenSet = false;
        let pIntervalId;
        let shouldClearInterval = false;
        let shouldClearPInterval = false;
        let domListenerAdded = false;
        let clickedArray = [];


        pIntervalId = setInterval(() => {
          if (shouldClearPInterval) {
            clearInterval(pIntervalId);
            if (hasBeenSet) {
              return
            }
          }

          eventFunction = function (event) {
            // if the recently added a tag element has a data-passage attribute that is already in the clickedArray, remove it by adding a d-none class
            const aTags = document.querySelectorAll('#user-response-panel a');
            aTags.forEach((aTag) => {
              if (clickedArray.includes(aTag.getAttribute('data-passage'))) {
                aTag.classList.add('hidden');
              }
            });

            // Check if all <a> tags have the 'hidden' class
            const allHidden = Array.from(aTags).every(aTag => aTag.classList.contains('hidden'));

            // If all <a> tags have the 'hidden' class, remove the class from each
            if (allHidden) {
              aTags.forEach(aTag => aTag.classList.remove('hidden'));
            }


            // on click of an a tag in the user-response-panel, add the contents of the data-passage attribute to the clickedArray
            document.getElementById('user-response-panel').addEventListener('click', function(event) {
              // Check if the clicked element is an <a> tag
              if (event.target.tagName === 'A') {
                var dataPassage = event.target.getAttribute('data-passage');
                if (dataPassage) {
                  // if the data-passage attribute is not already in the clickedArray, add it
                  if (!clickedArray.includes(dataPassage)) {
                    clickedArray.push(dataPassage);
                  }
                }
              }
            });

          };

          if (responsePanel !== null && !domListenerAdded) {
            domListenerAdded = true;

            responsePanel.addEventListener("DOMNodeInserted", eventFunction);

            shouldClearPInterval = true;

          } else {
            responsePanel = document.querySelector("#user-response-panel");
          }
        }, 1000);   
      `;
      script2.async = true;

      if (!document.getElementById('ox-script-1')) {
        script.id = 'ox-script-1';
        document.body.appendChild(script);
      }
      if (!document.getElementById('ox-script-2')) {
        script2.id = 'ox-script-2';
        document.body.appendChild(script2);
      }
    }

    return () => {
      console.log('script async cleanup');
      
      if (startedOnce) {
        // check if script is defined
        if (typeof script !== 'undefined') {
          document.body.removeChild(script).removeChild(script2);
        }
      }
    }
  }, [chatMode])

  return htmlContent?.length ? (
    <NonSSRWrapper>
      <div className="chat-panel col-lg-6 minh-full bg-light">
        
        <div ref={chatHistoryRef} id="phistory" className="chat-history"></div>
        <div id="passage"></div>
        <div id="animation-container">
          <div className="chat-passage-wrapper">
            <div className="chat-passage">
              <div className="wave">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="user-response-panel fixed-bottom bg-light-grayish-orange">
          <hr />
          <div id="user-response-hint" className="user-response-hint content-container"></div>
          <div id="user-response-panel" className="user-reponse-wrapper"></div>
        </div>
      </div>
      {/* <Script src="/js/custom-trialogue.js" async /> */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </NonSSRWrapper>
  ) : null;
}