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

export function ChatPanelLong({ chatMode, ...props }: ChatPanelProps) {
  const chatHistoryRef = useRef(null)
  const passageRef = useRef(null)
  const userResponsePanelRef = useRef(null)
  
  const scriptRef = useRef(null)
  const script2Ref = useRef(null)

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
    fetch('/chatContentLong-2Lang.html')
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
    if (!chatMode) {
      setStartedOnce(false);
      return;
    }    

    if (!startedOnce && htmlContent?.length) {

      //wait till dom is ready then run the code below with an event listener
      


      if (!scriptRef.current) {
        scriptRef.current = document.createElement('script');
        scriptRef.current.src = '/js/custom-trialogue-ox-edit.js';
        scriptRef.current.async = true;
      }

      if (!script2Ref.current) {
        script2Ref.current = document.createElement('script');
        script2Ref.current.textContent = `      
          document.addEventListener('DOMContentLoaded', () => {
            let responsePanel = document.querySelector("#user-response-panel");
            let clickedArray = [];

            const eventFunction = (event) => {
              // if the recently added a tag element has a data-passage attribute that is already in the clickedArray, remove it by adding a hidden class
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

            if (responsePanel) {
              const observer = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                  if (mutation.type === 'childList') {
                    eventFunction();
                  }
                }
              });

              observer.observe(responsePanel, { childList: true });

              // Clean up observer when the page is unloaded
              window.addEventListener('beforeunload', () => {
                observer.disconnect();
              });
            }
          });
        `;
        script2Ref.current.async = true;
      }
      
      window.isScriptActive = true;

      if (!scriptRef.current.parentNode) {
        scriptRef.current.id = 'ox-script-1';
        script2Ref.current.type = 'module';
        document.body.appendChild(scriptRef.current);
      }
      if (!script2Ref.current.parentNode) {
        script2Ref.current.id = 'ox-script-2';
        script2Ref.current.type = 'module';
        document.body.appendChild(script2Ref.current);
      }

      setStartedOnce(true);
    }

    // Function to remove script by ref
    const removeScriptByRef = (scriptRef) => {
      const script = scriptRef.current;
      if (script && script.parentNode) {
        // Stop any functions that the script is running
        if (script.id === 'ox-script-1') {
          // Clear intervals
          if (window.pIntervalId) {
            clearInterval(window.pIntervalId);
            window.pIntervalId = null;
          }

          // Remove event listeners
          const responsePanel = document.getElementById('user-response-panel');
          if (responsePanel && window.eventFunction) {
            responsePanel.removeEventListener('click', window.eventFunction);
            window.eventFunction = null;
          }

          // Disconnect MutationObserver
          if (window.observer) {
            window.observer.disconnect();
            window.observer = null;
          }
        }

        // Remove the script from the DOM
        script.parentNode.removeChild(script);
        scriptRef.current = null; // Reset the ref to null
      }
    };
    

    return () => {
      window.isScriptActive = false;
      resetStory();
      setStartedOnce(false);
    }
  }, [chatMode])

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.isScriptActive = false;
    };

    // Add event listener for beforeunload
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    // Function to remove script by ref
    const removeScriptByRef = (scriptRef) => {
      const script = scriptRef.current;
      if (script && script.parentNode) {
        // Stop any functions that the script is running
        if (script.id === 'ox-script-1') {
          // Clear intervals
          if (window.pIntervalId) {
            clearInterval(window.pIntervalId);
            window.pIntervalId = null;
          }

          // Remove event listeners
          const responsePanel = document.getElementById('user-response-panel');
          if (responsePanel && window.eventFunction) {
            responsePanel.removeEventListener('click', window.eventFunction);
            window.eventFunction = null;
          }

          // Disconnect MutationObserver
          if (window.observer) {
            window.observer.disconnect();
            window.observer = null;
          }
        }

        // Remove the script from the DOM
        script.parentNode.removeChild(script);
        scriptRef.current = null; // Reset the ref to null
      }
    };

    return () => {
      window.isScriptActive = false;
      // Clear the content in chat history ref
      if (chatHistoryRef.current) chatHistoryRef.current.innerHTML = '';
      if (passageRef.current) passageRef.current.innerHTML = '';
      if (userResponsePanelRef.current) userResponsePanelRef.current.innerHTML = '';
      removeScriptByRef(scriptRef);
      removeScriptByRef(script2Ref);

      // Remove event handlers set by the script
      if (window.customTrialogueClickHandler) {
        $('body').off('click', 'a[data-passage]', window.customTrialogueClickHandler);
        window.customTrialogueClickHandler = null; // Clear the global variable
      }

      if (window.customTrialogueHashChangeHandler) {
        $(window).off('hashchange', window.customTrialogueHashChangeHandler);
        window.customTrialogueHashChangeHandler = null; // Clear the global variable
      }
      // Empty the passages array
      if (window?.customTrialogueData?.passages) {
        window.customTrialogueData.passages = [];
      }

      // if(window?.passage) {
      //   window.passage = null;
      // }
    }
  }, [chatMode])

  //safely log window.customTrialogueData.passages
  // if (window?.customTrialogueData?.passages) {
  //   console.log(window.customTrialogueData.passages);
  // }

  const resetStory = () => {
    if (window.storyInstance) {
      window.storyInstance.reset();
    }
  };

  return htmlContent?.length ? (
    <NonSSRWrapper>
      <div className="chat-panel col-lg-6 minh-full bg-light">
        
      <div ref={chatHistoryRef} id="phistory" className="chat-history"></div>
      <div ref={passageRef} id="passage"></div>
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
          <div ref={userResponsePanelRef} id="user-response-panel" className="user-reponse-wrapper"></div>
        </div>
      </div>
      {/* <Script src="/js/custom-trialogue.js" async /> */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </NonSSRWrapper>
  ) : null;
}