/**
 * Generates text or code using OpenAI's GPT-3 models
 * @param {string} prompt The prompt to feed to the GPT-3 model
 * @param {string} cell The cell to append to the prompt
 * @param {number} temperature 0-1 scale. 1 = more creative, "riskier", 0 = accurate, deterministic. Defaults to number set in function
 * @param {number} maxWords The maximum number of words to generate. Defaults to number set in function.
 * @return {string} The generated text
 * 
 * Pls visit https://beta.openai.com/docs/api-reference/completions/create for documentation
 */

// Declare common variables and constants
const API_KEY = "YOUR_API_KEY_FROM_OPENAI";
const completionEndpoint = "https://api.openai.com/v1/completions";
const editEndpoint = "https://api.openai.com/v1/edits";

// Run text-davinci-003 model; best in class and "default" use
function runDavinci3(prompt, cell, temperature=0, maxWords=1000) {

if (maxWords){maxTokens = maxWords * 0.75}
model = "text-davinci-003"
prompt = prompt+cell+":"

  // Set up the request body with the given parameters
  const requestBody = {
    "model": model,
    "prompt": prompt,
    "temperature": temperature,
    "max_tokens": maxTokens
  };
  console.log(requestBody)

  // Set up the request options with the required headers
  const requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+API_KEY
    },
    "payload": JSON.stringify(requestBody)
  };

  // Send the request to the GPT-3 API endpoint for completions
  const response = UrlFetchApp.fetch(completionEndpoint, requestOptions);

  console.log(response.getContentText())
 
  // Get the response body as a JSON object
  const responseBody = JSON.parse(response.getContentText());

  let answer= responseBody.choices[0].text

  // Return the generated text from the response
  return answer
}


/****************************/
// Run text-curie-001 model; capable for most workflows at 1/10 cost and speed of davinci-003. Use for simpler and more straightforward tasks
function runCurie1(prompt, cell, temperature=0, maxWords=1000) {

//maxTokens = 10
if (maxWords){maxTokens = maxWords * 0.75}
model = "text-curie-001"
prompt = prompt+cell+":"

  // Set up the request body with the given parameters
  const requestBody = {
    "model": model,
    "prompt": prompt,
    "temperature": temperature,
    "max_tokens": maxTokens
  };
  console.log(requestBody)

  // Set up the request options with the required headers
  const requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+API_KEY
    },
    "payload": JSON.stringify(requestBody)
  };

  // Send the request to the GPT-3 API endpoint for completions
  const response = UrlFetchApp.fetch(completionEndpoint, requestOptions);

  console.log(response.getContentText())
 
  // Get the response body as a JSON object
  const responseBody = JSON.parse(response.getContentText());

  let answer= responseBody.choices[0].text

  // Return the generated text from the response
  return answer
}

/****************************/
// Run code-davinci-002 model; for code edits and generation
function runDavinciCode(prompt, cell, temperature=0, maxWords=1000) {

//maxTokens = 10
if (maxWords){maxTokens = maxWords * 0.75}
model = "code-davinci-002"
prompt = prompt+cell+":"

  // Set up the request body with the given parameters
  const requestBody = {
    "model": model,
    "prompt": prompt,
    "temperature": temperature,
    "max_tokens": maxTokens
  };
  console.log(requestBody)

  // Set up the request options with the required headers
  const requestOptions = {
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer "+API_KEY
    },
    "payload": JSON.stringify(requestBody)
  };

  // Send the request to the GPT-3 API endpoint for completions
  const response = UrlFetchApp.fetch(completionEndpoint, requestOptions);

  console.log(response.getContentText())
 
  // Get the response body as a JSON object
  const responseBody = JSON.parse(response.getContentText());

  let answer= responseBody.choices[0].text

  // Return the generated text from the response
  return answer
}
