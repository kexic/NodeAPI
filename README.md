# Headstorm Challenge
2019 [Headstorm Challenge](https://github.com/Headstorm/Interview/blob/master/challenges) submission by Rick Spencer


## Front End Challenge

I deferred this to last as I have the most recent experience on my resume to illustrate these skills.  The later
challenges were less represented.  Big stones first.

Project Setup Instructions:

* Clone this repository
* Execute the following scripts

> yarn

then

> yarn client-install

finally, to run the client and the server together

> yarn dev

Notes:

* I did not provide a ReCaptcha key.  Instead you can enter in your own keys in the file

> client/src/components/keys/keys.js

mongodb install scripts are found in:

> database/*

Tasks Remaining:
* Add pleasant and responsive form design to the contact form
* Add form feedback validation (preferably as the user is typing)
* Add username "taken" support pre-form submit
*

## Back End Challenge
I chose NodeJS as the REST API because it allows the entire project to be git-deployed.  It also lends well to migrating
to a docker deployment.  The route controller could in theory be split into separate files if at some point the service
should be migrated to a microservices model.

> Due to the brevity of the timeline I chose not to employ a repository pattern.

#### Modules Used
* Express was chosen as the framework in order to quickly add structure to the data types to be exchanged on node.  It
also makes the employment of CORS trivial
* The use of mongoose was selected to support and manage data connectivity
* body-parser was used to quickly process
payload data


## Database Challenge

I decided to undertake all the challenge work in Mongo DB, which I had never worked with previously.  It was a way to
add difficulty to the task, but it was also the most appropriate tool to use as the creation of the underlying data
structure was most portable and transparent.  Lastly, given the task did not entail specific instructions for usage
requirements (multi-AZ, unicode support, base performance SLAs, etc.) I believe it was a suitable choice.

When analyzing the data given, I had a couple of unanswered questions that impacted the structure of the final database.
Of course, without client clarification, I was forced to make an educational guess on these gaps.  The first pertains to
the values given by Basic Widget Order and Advanced Widget Order as the value could be a quantity, price or an ID.  I
chose to interpret it as the id (had it been a quantity I would have expected the verbiage "Ordered").  Secondly, the
Protection Plan could have been product-specific or possibly had an expiration which was not specified.  I therefore
presented it in the data as a global perpetual setting.  Lastly, the address as written would be extremely difficult to
split into its component parts and therefore the migration of this data would likely require a manual process for
re-entry (at the least oversight of an algorithm whereby the user could correct mistakes).

I decided to introduce a customer-order-relationship table for a couple of reasons.  Firstly, to track the status of the
order.  Secondly, to provide the ability to retain future cancelled or partial orders the ability to be split into
separate deliveries and yet retain the integrity of the customer-order relationship.  Lastly, to add a quick look-up
feature to the customer table whereby they can retrieve their list of orders without incurring heavy queries.

> I currently don't have a database visualization tool so I described the relationships in code
>
> For brevity I chose not to add self-references or data exploration hooks