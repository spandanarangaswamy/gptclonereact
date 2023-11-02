const { defaultConfiguration } = require("express/lib/application");
const { Configuration, OpenAIApi} = require("openai");
const configuration = new Configuration({
    organization: "org-1t9TZBeaiu9AMBbmKE3MYZ06",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);
//const response = await openai.listEngines();



async function main() {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "Say this is a test.",
    max_tokens: 7,
    temperature: 0,
  });

  console.log(completion);
}
main();