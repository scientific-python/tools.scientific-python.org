// node_modules/nanoid/index.js
import { webcrypto as crypto } from "crypto";
var POOL_SIZE_MULTIPLIER = 128;
var pool;
var poolOffset;
function fillPool(bytes) {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    crypto.getRandomValues(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    crypto.getRandomValues(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
}
function random(bytes) {
  fillPool(bytes |= 0);
  return pool.subarray(poolOffset - bytes, poolOffset);
}
function customRandom(alphabet, defaultSize, getRandom) {
  let mask = (2 << 31 - Math.clz32(alphabet.length - 1 | 1)) - 1;
  let step = Math.ceil(1.6 * mask * defaultSize / alphabet.length);
  return (size = defaultSize) => {
    if (!size) return "";
    let id = "";
    while (true) {
      let bytes = getRandom(step);
      let i = step;
      while (i--) {
        id += alphabet[bytes[i] & mask] || "";
        if (id.length >= size) return id;
      }
    }
  };
}
function customAlphabet(alphabet, size = 21) {
  return customRandom(alphabet, size, random);
}

// node_modules/myst-common/dist/utils.js
function addMessageInfo(message, info) {
  if (info?.note)
    message.note = info.note;
  if (info?.url)
    message.url = info.url;
  if (info?.ruleId)
    message.ruleId = info.ruleId;
  if (info?.key)
    message.key = info.key;
  if (info?.fatal)
    message.fatal = true;
  return message;
}
function fileWarn(file, message, opts) {
  return addMessageInfo(file.message(message, opts?.node, opts?.source), opts);
}
var az = "abcdefghijklmnopqrstuvwxyz";
var alpha = az + az.toUpperCase();
var numbers = "0123456789";
var nanoidAZ = customAlphabet(alpha, 1);
var nanoidAZ9 = customAlphabet(alpha + numbers, 9);

// src/names.json
var names_default = [
  { name: "arxiv", componentName: "ArxivIcon" },
  { name: "binder", componentName: "BinderIcon" },
  { name: "cc-by", componentName: "CcByIcon" },
  { name: "cc-nc", componentName: "CcNcIcon" },
  { name: "cc-nd", componentName: "CcNdIcon" },
  { name: "cc-sa", componentName: "CcSaIcon" },
  { name: "cc-zero", componentName: "CcZeroIcon" },
  { name: "cc", componentName: "CcIcon" },
  { name: "curvenote", componentName: "CurvenoteIcon" },
  { name: "discord", componentName: "DiscordIcon" },
  { name: "discourse", componentName: "DiscourseIcon" },
  { name: "email", componentName: "EmailIcon" },
  { name: "github", componentName: "GithubIcon" },
  { name: "jupyter-book", componentName: "JupyterBookIcon" },
  { name: "jupyter-text", componentName: "JupyterTextIcon" },
  { name: "jupyter", componentName: "JupyterIcon" },
  { name: "linkedin", componentName: "LinkedinIcon" },
  { name: "mastodon", componentName: "MastodonIcon" },
  { name: "myst", componentName: "MystIcon" },
  { name: "open-access", componentName: "OpenAccessIcon" },
  { name: "orcid", componentName: "OrcidIcon" },
  { name: "osi", componentName: "OsiIcon" },
  { name: "ror", componentName: "RorIcon" },
  { name: "slack", componentName: "SlackIcon" },
  { name: "twitter", componentName: "TwitterIcon" },
  { name: "website", componentName: "WebsiteIcon" },
  { name: "youtube", componentName: "YoutubeIcon" }
];

// src/scienceicons.ts
var SUPPORTED_ICONS = names_default.map((icon) => icon.name);
var iconRole = {
  name: "scienceicon",
  alias: ["scicon"],
  body: {
    type: String,
    required: true,
    doc: "The kind of icon to display"
  },
  run(data, vfile) {
    if (!SUPPORTED_ICONS.includes(data.body)) {
      fileWarn(vfile, `Unknown name of scienceicon: ${data.body}`);
      return [];
    }
    return [{ type: "scienceicon", value: data.body, kind: data.body }];
  }
};
var plugin = { name: "Science Icons by Curvenote", roles: [iconRole] };
var scienceicons_default = plugin;
export {
  scienceicons_default as default
};
//# sourceMappingURL=scienceicons.mjs.map