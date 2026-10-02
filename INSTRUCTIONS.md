# Candidate instructions

## Notes

- We recommend spending at least two hours in total across the three tasks.
- You will be provided with a `.env` file containing the variables required for this task.
- Please keep a dev log of thoughts when working through the task.
- The code may contain some intentional bugs, fix and record them in the dev log.
- Each task is meant as a starting point, you're encouraged to explore beyond the specifiied scope.
- The use of AI tools is allowed and your work should reflect your proficiency with these tools.
- Any AI API cost associated with completing this code test will be reimbursed up to £15.


## Task 1: Setup

Take the app and package folders provided and setup your project as if you were in an engineering team at Sanctuary.
Include any tooling or project architecture you have experience with or a preference towards.
Get the app running with the supplied package and verify retrieval returns data.


## Task 2: Complete the medical QA pipeline

Extend the pipeline to:

- Classify whether questions are in medical scope, returning a hard-coded response for out-of-scope questions.
- Convert user messages into vector-search queries.
- Retrieve paper information using the [PubMed API](https://www.ncbi.nlm.nih.gov/books/NBK25500/#chapter1.Downloading_Document_Summaries).
- Use the retrieved information to answer the user's question with an LLM.


## Task 3: Add a media-probe endpoint

Add an endpoint that accepts a media path or identifier and returns probe metadata
using the supplied package. No frontend is required.

Example media path: `post/a332c01e-9c3b-4c42-9ee7-489bc14a4d1d/4e4a3e14-e1fe-4a2c-9a66-4aafbec6e9fd/landscapeVideo.mp4`.
