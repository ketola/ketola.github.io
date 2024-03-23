---
title: Init blog.
date: 2024-03-16
---

I have done a few blog posts in the past, not very often, but I have done it to document something I’ve been 
working with and I have also always admired bloggers who spread knowledge and I guess it would be nice if someone 
could find something useful and helpful in my writings too.


In the past I have used different blogging platforms but this time I wanted to try to do it myself, to have as much 
control around the technology involved in it. <br/>
First I thought about implementing some kind of application to serve 
and store the posts, but blog posts are so static that it would be overkill and also would end up costing much 
more than when just serving the posts as static files.<br/>

So I decided to implement the blog with static site generation where I would generate the files for the blog each 
time I update it and then just serve the files which should be super cheap and fast.<br/>
I initially thought about storing the files to an S3 bucket in AWS and then having Cloudfront to serve the files, 
and I might get back to that idea later.<br/> 

But then I discovered the [GitHub Pages](https://pages.github.com/) which seemed really simple to start with, 
and it is also free. I basically just need to set up a git repository with a specific name in my GitHub account 
and then the files get served under https://ketola.github.io/.<br/>

For generating the site, GitHub pages suggested Jekyll, but I did not feel like getting into Ruby so after 
watching [6 minute tutorial](https://www.youtube.com/watch?v=kzf9A9tkkl4) on Eleventy, I decided to go with that, 
as it uses js and seemed to do the things I’m looking for.<br/>
I’m not skilled at all at creating nice looking layouts, so I browsed through some simple sites and basically 
copied the structure from them and then modified colors and some other details in them.


