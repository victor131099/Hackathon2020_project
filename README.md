# SYNCS Hackathon

SYNCS Hack is a competition which challenges teams of six students to design, build and pitch an idea in 40 hours. This can be anything - be it a website, app, game, or even hardware.

# Inspiration
* COVID-19 was first confirmed in Australia in late January 2020 and there have been more than 25,000 confirmed cases. Wearing of masks is playing such a significant role in helping to prevent the spread of the coronavirus that all Victorians are now required to wear a face-covering when they leave home.
* Under the Public Health Orders in NSW, all the business have to register as a COVID Safe business and follow the COVID-19 Safety Plan which strongly recommends everyone in the indoor venues wearing a face mask.
*  Self-Check-In System has many benefits such as freeing up reception staff time and better customer service.

# What It Does
The  **Mask Detection & Management (MDM)** aims to track the percentage of people wearing face masks in indoor facilities where the infection can easily be spread such as hospitals, restaurants and gym centres. We hope our project can help the managers/security department at these venues to better prevent community transmission.

Our project is divided into 2 parts: a Self Check-in System with Face Mask Detection and a Management Application
### Self Check-in System
At the check-in counter of the venue, the visitor is required to fill in details including name and contact number for later infection tracing, following the COVID-19 Safety plan under the Public Health Orders in NSW. All of the information will be stored confidentially and securely in the system's database for 28 days. In the meantime, the camera setup at the check-in counter allows the system to recognize real-time video face to detect whether the visitor is wearing a face mask or not. No image recording occurs at this stage to protect the visitor’s identification.

### Management Application
If the visitor is not wearing a face mask, the system will record this visitor's status and send it to the _Management Application_. At this stage, the admin has been noticed the situation and he can decide what to do next. If this happens in Victoria, he can turn on the **Automatic SMS** function on the app to let the system automatically send a warning message to this non-mask wearing visitor. If not, the admin can just simply keep his eyes on the percentage of non-mask wearers in the building. On the Management App, the admin can see all of the information of the visitors during the day in the **History** tab. There is also a **Summary Graph** and a **Calendar** section to let the admin traceback if there are any confirmed cases on a specific date. The app allows the admin to send the SMS to visitors having high-risk of infection easily, just by clicking a few buttons.

# How We Built It
* Backend: AWS lambda
* Front-end: React
* Automatic warning message: AWS SMS
* Facial Recognition: Tensorflow.js, ML5.js
* Database: DynamoDB
* Server: S3 Basket

# Challenges We Ran Into
There were many challenges we met while making this project and one of them was doing real-time video face recognition. The second one is expanding the self check-in system into mobile check-in. We ran out of time while doing that so we have given up on it finally. Privacy issue is also a thing that we really need to consider when developing this project.

# Accomplishments
* The self-check-in system helps to free up reception staff time as well as reduce unnecessary physical interaction to avoid community transmission.
* The management app is a very effective tool for the managers to control the situation of the venues in real-time and easily traceback when necessary. Automatic SMS function helps the notification process become much easier.
* These 2 parts work smoothly together to deliver the best result for our customers.

# What We Learned
This project improved our ability to work in collaboration and manage time efficiently. We have learnt that creating a software product is not just about fancy front-end or complicated back-end. It is more about the value we can bring to our prospective customers.

# Future Improvement
* Integrate our self-check-in system with some kinds of temperature sensors for body temperature measurement
* Expand the self-check-in system into mobile check-in to eliminate even further risk of infection

# When The Pandemic Is Over?
* Modify the system into emotion recognition for better customer service

