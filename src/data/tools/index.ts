import type { Tool } from '../types';
import { braveTool } from './brave';
import { tailscaleTool } from './tailscale';
import { localsend } from './localsend';
import { obsStudio } from './obs-studio';
import { handbrake } from './handbrake';
import { sevenZip } from './7zip';
import { powertoys } from './powertoys';
import { losslesscut } from './losslesscut';
import { ollama } from './ollama';
import { openWebUI } from './open-webui';
import { vscode } from './vscode';
import { sharex } from './sharex';
import { vlc } from './vlc';
import { rustdesk } from './rustdesk';
import { keepassxc } from './keepassxc';
import { everything } from './everything';
import { nanazip } from './nanazip';
import { mpv } from './mpv';
import { crystaldiskinfo } from './crystaldiskinfo';
import { hwinfo } from './hwinfo';
import { blender } from './blender';
import { gimp } from './gimp';
import { krita } from './krita';
import { kdenlive } from './kdenlive';
import { audacity } from './audacity';
import { comfyui } from './comfyui';
import { jan } from './jan';
import { anythingllm } from './anythingllm';
import { git } from './git';
import { docker } from './docker';
import { clashVergeRev } from './clash-verge-rev';
import { hiddify } from './hiddify';
import { v2rayn } from './v2rayn';
import { nekobox } from './nekobox';
import { pot } from './pot';
import { davinciResolve } from './davinci-resolve';
import { inkscape } from './inkscape';
import { lmStudio } from './lm-studio';
import { chatbox } from './chatbox';
import { fooocus } from './fooocus';
import { rufus } from './rufus';
import { bitwarden } from './bitwarden';
import { windowsTerminal } from './windows-terminal';
import { dbeaver } from './dbeaver';
import { wireshark } from './wireshark';
import { hoppscotch } from './hoppscotch';

export const tools: Tool[] = [
  braveTool,
  tailscaleTool,
  localsend,
  obsStudio,
  handbrake,
  sevenZip,
  powertoys,
  losslesscut,
  ollama,
  openWebUI,
  vscode,
  sharex,
  vlc,
  rustdesk,
  keepassxc,
  everything,
  nanazip,
  mpv,
  crystaldiskinfo,
  hwinfo,
  blender,
  gimp,
  krita,
  kdenlive,
  audacity,
  comfyui,
  jan,
  anythingllm,
  git,
  docker,
  clashVergeRev,
  hiddify,
  v2rayn,
  nekobox,
  pot,
  davinciResolve,
  inkscape,
  lmStudio,
  chatbox,
  fooocus,
  rufus,
  bitwarden,
  windowsTerminal,
  dbeaver,
  wireshark,
  hoppscotch
];
