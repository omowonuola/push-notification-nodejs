// import dotenv from 'dotenv';
// import axios from 'axios'

const publicVapidKey = 'BMpeq49ysvWkwfDQmC9m5a6-0wy6z7YtQZphF0jJ5NtjiyJdDcDi6zOWP_xW4aLaRN9YzznUxzwOSUUUJzjBlWE'



// Register service worker, register push, send push

const trigger = async() => {
    console.log('Registering service worker...')
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    })
    console.log('Service Worker Registered..')

    // Register Push
    console.log('Registering Push...');
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey
    });
    console.log('Push Registered...')

    // Send Push Notification
    console.log('Sending Push...')

    await fetch("/subscribe/topic", {
        method: "POST",
        body: JSON.stringify(subscription),
        headers: {
          "content-type": "application/json"
        }
    });

    console.log('Push Sent...');
}


// Check for service worker
try {
    if('serviceWorker' in navigator) {
        trigger()
    }  
} catch (error) {
    console.log(error)
}
