import React from "react"
import renderer from "react-test-renderer"

import Papers from "../../src/pages/papers"

describe("Papers", () => {
  it("renders correctly", () => {
    const data = {
      "papers": {
        "edges": [
          {
            "node": {
              "title": "A Neural Algorithm of Artistic Style",
              "slug": {
                "current": "a-neural-algorithm-of-artistic-style"
              },
              "author": "Leon A. Gatys, Alexander S. Ecker, Matthias Bethge",
              "abstract": "In fine art, especially painting, humans have mastered the skill to create unique visual experiences through composing a complex interplay between the content and style of an image. Thus far the algorithmic basis of this process is unknown and there exists no artificial system with similar capabilities. However, in other key areas of visual perception such as object and face recognition near-human performance was recently demonstrated by a class of biologically inspired vision models called Deep Neural Networks. Here we introduce an artificial system based on a Deep Neural Network that creates artistic images of high perceptual quality. The system uses neural representations to separate and recombine content and style of arbitrary images, providing a neural algorithm for the creation of artistic images. Moreover, in light of the striking similarities between performance-optimised artificial neural networks and biological vision, our work offers a path forward to an algorithmic understanding of how humans create and perceive artistic imagery."
            }
          }
        ]
      }
    }
    
    const tree = renderer.create(<Papers data={data} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
