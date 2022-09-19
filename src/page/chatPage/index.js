import "./conversation.css";
export let chatPage = /*html*/ `
<div id="chat-screen">
    <div class="nav-top">
        <span>xKingx Chat</span>
        <span id="displayName"></span>
    </div>
    <div class="content">
        <div class="left">
            <div class="new-convers"><button class="add-friend-btn">+ New Conversation</button></div>
            <div class="con-list"></div>
        </div>
        <div class="center">
            <div class="first-convers">First Conversation</div>
            <div class="chat-zone"></div>
            <div class="chat-type"><input class="input-chat" type="text"
                placeholder="Type a message..."><button class="send-btn">Send</button></div>
        </div>
        <div class="right"></div>
    </div>
</div>`;
