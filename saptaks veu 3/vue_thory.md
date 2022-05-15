<!-- Day-1 -->

what is Vue?
--> 1.Front-end, javaScript / typeScript framework
-->2.used to create dynamic & data-driven website(SPA's)
-->3.Can also be used to create stand-alone widgets
-->example--> search bar , contact form.

when to use vue??
-->1.Vue is used to create a whole website with multiple pages & components
-->2.These website are normally called single page Application
-->3.All routing is done in the webbrowser & not on the server

Single Page application -
-->1. Only a single HTML page sent (Initially) To the browser
-->2.Vue itercepts subsequent request and handles "page" Changes in the browser by swapping what components are shown on the page
-->3.results in a much faster and smoother website experience

Vue 3 NEW Features?
-->Iproves on reusibility, organisation & readability
-->it does this by use a new setup() function
-->Can Have many root elements side-by-side in a component
example--> <template>

<div>
<p>Hello,world</p>
</div>
<div>
<p>Hello,again!<p>
<div>
</template>
--> Teleport Component
--> Render content from one component in a defferent place in the DOM
--> useful for things like modals
--> Suspense Component
--> used to handle Asynchronus components easily
--> Can provide fall0back content (e.g a spinner) until data is loaded  
--> TypeScript Support
--> Can Now write Vue applications using TypeScipt

--> Multiple V-models For custoom components
--> Improved reactivity
-->Performance gains

Mounting The App--> an Application instance wont render anything until its .mount() method is called. It expexts a "container" argument, which can either be an actual DOM element or a selector string.

<!-- Day-2 -->

Event Handlers in vue--
We can use the v-on directive, which we typically shorten to the @ symbol, to listen to DOM events and run some JavaScript when they're triggered. The usage would be v-on:click="handler" or with the shortcut, @click="handler".
--> Inline handlers: Inline JavaScript to be executed when the event is triggered (similar to the native onclick attribute).

Method handlers: A property name or path that points to a method defined on the component.

Conditional rendering
-->Conditional Rendering in Vue makes it easy to toggle the presence of any element in the DOM based on a certain condition. The directives v-if and v-else are used for this purpose.
For Example-->(https://www.geeksforgeeks.org/vue-js-conditional-rendering/#:~:text=Conditional%20Rendering%20in%20Vue%20makes,to%20conditionally%20render%20a%20block.)

<!-- Day-3 -->

List Rendering-->We can use the v-for directive to render a list of items based on an array. The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on:

data() {
return {
items: [{ message: 'Foo' }, { message: 'Bar' }]
}
}

<li v-for="item in items">
  {{ item.message }}
</li>

Attribue binding-->(https://www.youtube.com/watch?v=CYPZBK8zUik)

Dynamic class-->How do I add dynamic classes to Vue?
Adding a dynamic class name is as simple as adding the prop :class="classname" to your component. Whatever classname evaluates to will be the class name that is added to your component.

computed Properties-->In Vue.js, computed properties enable you to create a property that can be used to modify, manipulate, and display data within your components in a readable and efficient manner.
You can use computed properties to calculate and display values based on a value or set of values in the data model.

Using the vue Cli(https://www.youtube.com/watch?v=GWRvrSqnFbM)-- 1> Node JS Lts Download
2> Command promt me -- npm install -g @vue/cli

<!-- Day-4 -->

CDN vs CLI
Well Vue cdn or any cdn(content delivery network) link is used to host our files to the server... So that we can run our web app without downloading the files required for Vue.js to run.
Angular CDN is a set of files that you can add to your <head> tag to add the Angualr dependency to your project (I've never heard of it, but it's a CDN so the concept is the same)

Cli -

Now Vue cli (command line interface) or any cli which is mostly run by npm is used to download the files containing code which will be required to run the Vue app Cli consist of different commands to be typed on terminal for eg to install the Vue--- npm install -g vue/cli

cli own apps compile and run faster as doesn't depend on internet connection where as in cdn we should have fast in internet connection to run it properly

Vite
Vite. js allows developers to set up a development environment for frameworks like Vue and React and even for Vanilla JavaScript app with a dev server.
