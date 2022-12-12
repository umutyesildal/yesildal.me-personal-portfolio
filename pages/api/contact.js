const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

export default async function handler(req, res) {
  try{ 
    if(req.method == 'POST'){
      const data = JSON.parse(req.body);
      const name = data.name;
      const email = data.email;
      const company = data.company;
      const message = data.message;

      const replyMessage = '\n\n----- Original message -----\n\n> ' + message.replace(/\n/g, '\n > ');
      const urlEncodedReplyMessage = encodeURIComponent(replyMessage);

      const slackMessage = `
      {
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "Business inquiry from *${name}* at *${company}*"
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "${message}"
            }
          },
          {
            "type": "divider"
          },
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "Reply to *${email}*"
            },
            "accessory": {
              "type": "button",
              "text": {
                "type": "plain_text",
                "text": "✉️ Reply",
                "emoji": true
              },
              "value": "reply",
              "url": "mailto:${email}?subject=Metavest%20Business%20Inquiry&body=${urlEncodedReplyMessage}",
              "action_id": "reply-action"
            }
          }
        ]
      }`;

      await fetch(SLACK_WEBHOOK_URL, {
        method: 'post',
        headers: new Headers({'content-type': 'application/json'}),
        body: slackMessage
      });
      return res.status(200).json({ status: 'success' })
    }else{
      return res.status(405);
    }
  }catch(e){
    return res.status(400).json({ status: 'fail', error: e});
  }
 
}
