"use strict";exports.id=6651,exports.ids=[6651],exports.modules={9531:(a,b,c)=>{c.a(a,async(a,d)=>{try{c.d(b,{y:()=>h});var e=c(94664),f=c(5e4),g=a([e]);e=(g.then?(await g)():g)[0];class h extends e.T{async analyze(a,b){let c=Date.now();if(!this.validateContent(a)){let a=this.createBaseResult(b?.noteId||"unknown","failed",null,"Content too short for categorization");return this.logMetrics(b?.noteId||"unknown",Date.now()-c,!1,"Content too short"),a}try{let d=await this.executeWithTimeout(async()=>{let b=this.buildPrompt(a);return(await generateObject({model:this.model,schema:f.g9,prompt:b})).object}),e=Date.now()-c,g=this.createBaseResult(b?.noteId||"unknown","completed",d,void 0,e);return this.logMetrics(b?.noteId||"unknown",e,!0),g}catch(f){let a=Date.now()-c,d=f instanceof Error?f.message:"Unknown error",e=this.createBaseResult(b?.noteId||"unknown","failed",null,d,a);return this.logMetrics(b?.noteId||"unknown",a,!1,d),e}}buildPrompt(a){return`You are an expert content classifier specializing in intelligent categorization.

Content to analyze:
"${a}"

Please categorize this content using a hierarchical classification system. For each category:

1. **Name**: A clear, descriptive category name (2-50 characters)
2. **Confidence**: A score from 0-1 indicating how confident you are in this categorization
3. **Reasoning**: Brief explanation of why this category applies
4. **Subcategories**: Optional more specific subcategories

Consider these category types:
- **Subject Matter**: What is the content about? (e.g., Technology, Business, Health, Education)
- **Content Type**: What form is it? (e.g., Tutorial, Analysis, Opinion, News, Research)
- **Purpose**: What is the intent? (e.g., Informational, Persuasive, Instructional, Creative)
- **Domain**: What field or industry? (e.g., Software Development, Marketing, Medicine, Law)
- **Audience**: Who is it for? (e.g., Beginners, Professionals, General Public, Students)
- **Tone**: What is the style? (e.g., Formal, Casual, Technical, Academic)

Guidelines:
- Provide 1-5 categories (prioritize the most relevant)
- Use standard, recognizable category names
- Consider both primary and secondary categorizations
- Include confidence scores for each category
- Provide clear reasoning for your choices
- Consider the content's context and implications
- Use consistent naming conventions

The primary category should be the most important classification for organizing and finding this content.`}constructor(...a){super(...a),this.type=f.X.CATEGORIES,this.priority=3,this.timeout=8e3}}d()}catch(a){d(a)}})},46032:(a,b,c)=>{c.a(a,async(a,d)=>{try{c.d(b,{b:()=>h});var e=c(94664),f=c(5e4),g=a([e]);e=(g.then?(await g)():g)[0];class h extends e.T{async analyze(a,b){let c=Date.now();if(!this.validateContent(a)){let a=this.createBaseResult(b?.noteId||"unknown","failed",null,"Content too short for tag extraction");return this.logMetrics(b?.noteId||"unknown",Date.now()-c,!1,"Content too short"),a}try{let d=await this.executeWithTimeout(async()=>{let b=this.buildPrompt(a);return(await generateObject({model:this.model,schema:f.vt,prompt:b})).object}),e=Date.now()-c,g=this.createBaseResult(b?.noteId||"unknown","completed",d,void 0,e);return this.logMetrics(b?.noteId||"unknown",e,!0),g}catch(f){let a=Date.now()-c,d=f instanceof Error?f.message:"Unknown error",e=this.createBaseResult(b?.noteId||"unknown","failed",null,d,a);return this.logMetrics(b?.noteId||"unknown",a,!1,d),e}}buildPrompt(a){return`You are an expert content tagger specializing in creating comprehensive, searchable tags.

Content to analyze:
"${a}"

Please extract relevant tags that would help users find and organize this content. For each tag:

1. **Tag**: A concise, searchable term (2-30 characters)
2. **Relevance**: A score from 0-1 indicating how relevant this tag is to the content
3. **Type**: The type of tag (topic, entity, concept, action, emotion)
4. **Frequency**: Optional count of how often this concept appears in the content

Tag Types:
- **Topic**: Main subjects or themes (e.g., "machine-learning", "project-management")
- **Entity**: Specific people, places, organizations, products (e.g., "google", "javascript", "tesla")
- **Concept**: Abstract ideas or principles (e.g., "agile", "sustainability", "innovation")
- **Action**: Verbs or activities (e.g., "planning", "analysis", "implementation")
- **Emotion**: Emotional tone or sentiment (e.g., "optimistic", "concerned", "excited")

Guidelines:
- Extract 1-15 tags (prioritize the most relevant and useful)
- Use lowercase, hyphenated format for multi-word tags
- Avoid overly generic tags (like "information" or "content")
- Include both broad and specific tags
- Consider synonyms and related terms
- Focus on tags that would be useful for search and discovery
- Include technical terms, proper nouns, and key concepts
- Consider the content's context and domain

The tags should make this content easily discoverable and help users understand what it's about at a glance.`}constructor(...a){super(...a),this.type=f.X.TAGS,this.priority=4,this.timeout=6e3}}d()}catch(a){d(a)}})},46651:(a,b,c)=>{c.a(a,async(a,d)=>{try{c.d(b,{Z:()=>m});var e=c(5e4),f=c(62261),g=c(94149),h=c(9531),i=c(46032),j=c(47982),k=c(48415),l=a([f,g,h,i,j,k]);[f,g,h,i,j,k]=l.then?(await l)():l;class m{constructor(){this.services=new Map,this.cache=new Map,this.initializeServices(),this.defaultConfig={enabledAnalyses:[e.X.TITLE,e.X.SUMMARY,e.X.KEY_POINTS,e.X.CATEGORIES,e.X.TAGS,e.X.SENTIMENT],priority:[e.X.TITLE,e.X.SUMMARY,e.X.KEY_POINTS,e.X.CATEGORIES,e.X.TAGS,e.X.SENTIMENT],timeout:3e4,retryAttempts:2,cacheEnabled:!0,cacheTTL:864e5}}async initializeServices(a){let b=new f.y,c=new g.w,d=new h.y,l=new i.b,m=new j.r,n=new k.K;a&&await Promise.all([b.initialize(a),c.initialize(a),d.initialize(a),l.initialize(a),m.initialize(a),n.initialize(a)]),this.services.set(e.X.SUMMARY,b),this.services.set(e.X.KEY_POINTS,c),this.services.set(e.X.CATEGORIES,d),this.services.set(e.X.TAGS,l),this.services.set(e.X.SENTIMENT,m),this.services.set(e.X.TITLE,n)}async analyze(a,b){let c=Date.now(),d={...this.defaultConfig,...a.config};if(d.cacheEnabled&&!a.forceRefresh){let b=this.getCachedAnalysis(a.noteId);if(b)return{success:!0,data:b}}try{await this.initializeServices(b);let e=this.getEnabledServices(d),f=await this.executeAnalyses(a.noteId,a.content,e,d),g=this.calculateOverallConfidence(f),h={noteId:a.noteId,analyses:f,overallConfidence:g,processingTime:Date.now()-c,version:"1.0.0",createdAt:new Date,updatedAt:new Date};return d.cacheEnabled&&this.cacheAnalysis(a.noteId,h),{success:!0,data:h}}catch(a){return console.error("Analysis orchestration failed:",a),{success:!1,error:a instanceof Error?a.message:"Unknown error"}}}getEnabledServices(a){return a.enabledAnalyses.map(a=>this.services.get(a)).filter(a=>void 0!==a).sort((a,b)=>a.getPriority()-b.getPriority())}async executeAnalyses(a,b,c,d){let e={},f={noteId:a},g=c.filter(a=>2>=a.getPriority()),h=c.filter(a=>a.getPriority()>2);for(let c of g)try{let a=await c.analyze(b,f);e[c.type]=a}catch(b){console.error(`High-priority analysis failed for ${c.type}:`,b),e[c.type]=c.createBaseResult(a,"failed",null,b instanceof Error?b.message:"Unknown error")}let i=h.map(async c=>{try{return await c.analyze(b,f)}catch(b){return console.error(`Analysis failed for ${c.type}:`,b),c.createBaseResult(a,"failed",null,b instanceof Error?b.message:"Unknown error")}});return(await Promise.all(i)).forEach(a=>{e[a.type]=a}),e}calculateOverallConfidence(a){let b=Object.values(a).filter(a=>"completed"===a.status);if(0===b.length)return 0;let c={[e.X.TITLE]:.2,[e.X.SUMMARY]:.25,[e.X.KEY_POINTS]:.2,[e.X.CATEGORIES]:.15,[e.X.TAGS]:.1,[e.X.SENTIMENT]:.1,[e.X.ENTITIES]:.05,[e.X.TOPICS]:.05,[e.X.RELATIONSHIPS]:.05,[e.X.CONFIDENCE_SCORE]:.05},d=0,f=0;return b.forEach(a=>{let b=c[a.type]||.05,e=this.extractConfidenceFromResult(a);f+=e*b,d+=b}),d>0?f/d:0}extractConfidenceFromResult(a){if("completed"!==a.status||!a.result)return 0;if("object"==typeof a.result&&null!==a.result){if("confidence"in a.result)return a.result.confidence;if("overallConfidence"in a.result)return a.result.overallConfidence}return .8*("completed"===a.status)}getCachedAnalysis(a){let b=this.cache.get(a);return b?Date.now()-b.createdAt.getTime()>this.defaultConfig.cacheTTL?(this.cache.delete(a),null):b:null}cacheAnalysis(a,b){this.cache.set(a,b),this.cache.size>100&&this.cleanupCache()}cleanupCache(){let a=Date.now();Array.from(this.cache.entries()).forEach(([b,c])=>{a-c.createdAt.getTime()>this.defaultConfig.cacheTTL&&this.cache.delete(b)})}getStats(){return{totalAnalyses:this.cache.size,cacheSize:this.cache.size,availableServices:Array.from(this.services.keys())}}clearCache(){this.cache.clear()}}d()}catch(a){d(a)}})},47982:(a,b,c)=>{c.a(a,async(a,d)=>{try{c.d(b,{r:()=>h});var e=c(94664),f=c(5e4),g=a([e]);e=(g.then?(await g)():g)[0];class h extends e.T{async analyze(a,b){let c=Date.now();if(!this.validateContent(a)){let a=this.createBaseResult(b?.noteId||"unknown","failed",null,"Content too short for sentiment analysis");return this.logMetrics(b?.noteId||"unknown",Date.now()-c,!1,"Content too short"),a}try{let d=await this.executeWithTimeout(async()=>{let b=this.buildPrompt(a);return(await generateObject({model:this.model,schema:f.j0,prompt:b})).object}),e=Date.now()-c,g=this.createBaseResult(b?.noteId||"unknown","completed",d,void 0,e);return this.logMetrics(b?.noteId||"unknown",e,!0),g}catch(f){let a=Date.now()-c,d=f instanceof Error?f.message:"Unknown error",e=this.createBaseResult(b?.noteId||"unknown","failed",null,d,a);return this.logMetrics(b?.noteId||"unknown",a,!1,d),e}}buildPrompt(a){return`You are an expert sentiment analyst specializing in understanding emotional tone and attitude.

Content to analyze:
"${a}"

Please analyze the sentiment and emotional tone of this content. Provide:

1. **Overall Sentiment**: The primary emotional tone (positive, negative, neutral, mixed)
2. **Confidence**: How confident you are in this assessment (0-1)
3. **Emotions**: Specific emotions detected with their intensity (0-1)
4. **Polarity**: Overall emotional polarity (-1 to 1, where -1 is very negative, 0 is neutral, 1 is very positive)

Consider these aspects:
- **Tone**: Is the content optimistic, pessimistic, neutral, or mixed?
- **Emotional Language**: What emotions are expressed or implied?
- **Attitude**: How does the author feel about the subject matter?
- **Context**: Consider the purpose and context of the content
- **Nuance**: Look for subtle emotional cues and mixed sentiments

Emotions to consider:
- Joy, excitement, satisfaction, optimism
- Sadness, disappointment, frustration, concern
- Anger, irritation, criticism, hostility
- Fear, anxiety, worry, uncertainty
- Surprise, curiosity, interest, amazement
- Trust, confidence, certainty, assurance
- Disgust, contempt, rejection, disapproval

Guidelines:
- Consider both explicit and implicit emotional content
- Look for emotional indicators in word choice, tone, and context
- Account for sarcasm, irony, and other nuanced expressions
- Consider the overall message and its emotional impact
- Provide confidence scores based on clarity of emotional signals
- Identify mixed sentiments when multiple emotions are present

The analysis should help understand the emotional context and tone of the content for better interpretation and response.`}constructor(...a){super(...a),this.type=f.X.SENTIMENT,this.priority=5,this.timeout=5e3}}d()}catch(a){d(a)}})},48415:(a,b,c)=>{c.a(a,async(a,d)=>{try{c.d(b,{K:()=>h});var e=c(94664),f=c(5e4),g=a([e]);e=(g.then?(await g)():g)[0];class h extends e.T{async analyze(a,b){let c=Date.now();if(!this.validateContent(a)){let a=this.createBaseResult(b?.noteId||"unknown","failed",null,"Content too short for title generation");return this.logMetrics(b?.noteId||"unknown",Date.now()-c,!1,"Content too short"),a}try{let d=await this.executeWithTimeout(async()=>{let b=this.buildPrompt(a);return(await generateObject({model:this.model,schema:f.sj,prompt:b})).object}),e=Date.now()-c,g=this.createBaseResult(b?.noteId||"unknown","completed",d,void 0,e);return this.logMetrics(b?.noteId||"unknown",e,!0),g}catch(f){let a=Date.now()-c,d=f instanceof Error?f.message:"Unknown error",e=this.createBaseResult(b?.noteId||"unknown","failed",null,d,a);return this.logMetrics(b?.noteId||"unknown",a,!1,d),e}}buildPrompt(a){return`You are an expert content titler specializing in creating compelling, descriptive titles.

Content to analyze:
"${a}"

Please generate an effective title for this content. Provide:

1. **Title**: A clear, engaging title (5-100 characters)
2. **Alternatives**: 1-3 alternative title options
3. **Confidence**: How confident you are in this title (0-1)
4. **Style**: The title style (descriptive, question, statement, creative)

Title Guidelines:
- **Descriptive**: Clearly describes what the content is about
- **Question**: Poses a question that the content answers
- **Statement**: Makes a declarative statement about the content
- **Creative**: Uses creative language or wordplay

Consider these factors:
- **Clarity**: The title should clearly indicate the content's main topic
- **Engagement**: Make it interesting and compelling to read
- **Accuracy**: Ensure it accurately represents the content
- **Length**: Keep it concise but informative
- **Keywords**: Include important terms for searchability
- **Tone**: Match the tone and style of the content
- **Uniqueness**: Make it distinctive and memorable

Avoid:
- Generic titles like "Notes" or "Content"
- Overly long or complex titles
- Misleading or inaccurate descriptions
- Titles that don't reflect the main content

The title should help users quickly understand what the content is about and encourage them to read it.`}constructor(...a){super(...a),this.type=f.X.TITLE,this.priority=1,this.timeout=5e3}}d()}catch(a){d(a)}})},62261:(a,b,c)=>{c.a(a,async(a,d)=>{try{c.d(b,{y:()=>h});var e=c(94664),f=c(5e4),g=a([e]);e=(g.then?(await g)():g)[0];class h extends e.T{async analyze(a,b){let c=Date.now();if(!this.validateContent(a)){let a=this.createBaseResult(b?.noteId||"unknown","failed",null,"Content too short for analysis");return this.logMetrics(b?.noteId||"unknown",Date.now()-c,!1,"Content too short"),a}try{let d=await this.executeWithTimeout(async()=>{let b=this.buildPrompt(a);return(await generateObject({model:this.model,schema:f.s4,prompt:b})).object}),e=Date.now()-c,g=this.createBaseResult(b?.noteId||"unknown","completed",d,void 0,e);return this.logMetrics(b?.noteId||"unknown",e,!0),g}catch(f){let a=Date.now()-c,d=f instanceof Error?f.message:"Unknown error",e=this.createBaseResult(b?.noteId||"unknown","failed",null,d,a);return this.logMetrics(b?.noteId||"unknown",a,!1,d),e}}buildPrompt(a){return`You are an expert content analyst specializing in creating high-quality summaries.

Content to analyze:
"${a}"

Please create a comprehensive summary that:
1. Captures the main ideas and key concepts
2. Maintains the original meaning and context
3. Is concise but complete (10-1000 words)
4. Identifies the primary themes
5. Uses clear, professional language

Focus on extracting the essence of the content while preserving important details. The summary should be useful for someone who wants to quickly understand the main points without reading the full content.

Consider the content's:
- Main topic and purpose
- Key arguments or points
- Important details or examples
- Overall tone and perspective
- Target audience implications

Provide a confidence score (0-1) indicating how well you understood the content, and identify the primary language used.`}constructor(...a){super(...a),this.type=f.X.SUMMARY,this.priority=1,this.timeout=1e4}}d()}catch(a){d(a)}})},94149:(a,b,c)=>{c.a(a,async(a,d)=>{try{c.d(b,{w:()=>h});var e=c(94664),f=c(5e4),g=a([e]);e=(g.then?(await g)():g)[0];class h extends e.T{async analyze(a,b){let c=Date.now();if(!this.validateContent(a)){let a=this.createBaseResult(b?.noteId||"unknown","failed",null,"Content too short for key points extraction");return this.logMetrics(b?.noteId||"unknown",Date.now()-c,!1,"Content too short"),a}try{let d=await this.executeWithTimeout(async()=>{let b=this.buildPrompt(a);return(await generateObject({model:this.model,schema:f.U2,prompt:b})).object}),e=Date.now()-c,g=this.createBaseResult(b?.noteId||"unknown","completed",d,void 0,e);return this.logMetrics(b?.noteId||"unknown",e,!0),g}catch(f){let a=Date.now()-c,d=f instanceof Error?f.message:"Unknown error",e=this.createBaseResult(b?.noteId||"unknown","failed",null,d,a);return this.logMetrics(b?.noteId||"unknown",a,!1,d),e}}buildPrompt(a){return`You are an expert content analyst specializing in extracting key points and insights.

Content to analyze:
"${a}"

Please extract the most important key points from this content. For each key point:

1. **Point**: A clear, concise statement of the main idea (10-200 characters)
2. **Importance**: A score from 0-1 indicating how critical this point is to understanding the content
3. **Category**: Optional categorization (e.g., "main argument", "supporting evidence", "conclusion", "action item")
4. **Evidence**: Optional supporting evidence or context from the content

Guidelines:
- Extract 1-10 key points (prioritize quality over quantity)
- Focus on the most significant ideas, arguments, or insights
- Avoid redundancy - each point should be distinct
- Consider both explicit and implicit key ideas
- Rank points by importance to the overall content
- Include actionable items if present
- Capture both facts and opinions/interpretations

The key points should help someone quickly understand the most important aspects of the content without reading it in full.`}constructor(...a){super(...a),this.type=f.X.KEY_POINTS,this.priority=2,this.timeout=12e3}}d()}catch(a){d(a)}})}};