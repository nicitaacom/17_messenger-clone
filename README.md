# What inside? <br/> <sub> https://17-messenger-clone.vercel.app/ </sub>

![work in progress](https://i.imgur.com/pdHbvxY.png)

<br/>
<br/>
<br/>

# Clone repository

## Step 1.1 - clone repository (variant 1)

![alt text](https://i.imgur.com/9KSgjaN.png)

## or Step 1.1 - clone repository (variant 2)

```
git clone https://github.com/nicitaacom/17_messenger-clone
```

## Step 1.2 - install deps

```
pnpm i
```

<br/>
<br/>
<br/>

## Step 2 - setup .env


### 2.1 - github

![Go to settings](https://i.imgur.com/vnG4aMh.png)

### 2.2 - github

![Go to developer settings](https://i.imgur.com/eodZM9p.png)

### 2.3 - github

![OAuth Apps](https://i.imgur.com/yjeGtKv.png)

### 2.4 - github

![New OAuth App](https://i.imgur.com/QXuo0kE.png)

### 2.5 - github

![Auth url](https://i.imgur.com/MKmuYnA.png)

### 2.6 - github

![Copy env values](https://i.imgur.com/SIkWyeE.png)

### 2.7 - github

![Paste env values](https://i.imgur.com/3UyCFyD.png)

### 2.8 - google cloud console

[![setup_google_video](https://i.imgur.com/s8F1YYA.png)](https://streamable.com/blib2f)

### 2.9 - NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME

https://youtu.be/PGPGcKBpAk8?t=17601

### 2.10 - setup upload preset

1. Go to `app/conversations/[conversationId]/components/Form.tsx`
2. ctrl+f - `CldUploadButton`
3. replace it with your upload preset using [this guide](https://youtu.be/PGPGcKBpAk8?t=17740)

### 2.11 - setup pusher

https://youtu.be/PGPGcKBpAk8?t=27808