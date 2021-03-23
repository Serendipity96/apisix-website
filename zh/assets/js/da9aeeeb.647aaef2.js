(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(250)),s={title:"Backend Tests"},o={unversionedId:"back-end-tests",id:"back-end-tests",isDocsHomePage:!1,title:"Backend Tests",description:"\x3c!--",source:"@site/docs/apisix-dashboard/back-end-tests.md",slug:"/back-end-tests",permalink:"/zh/docs/dashboard/back-end-tests",editUrl:"https://github.com/apache/apisix-dashboard/edit/master/docs/zh/latest/back-end-tests.md",version:"current",sidebar:"docs",previous:{title:"Frontend E2E",permalink:"/zh/docs/dashboard/front-end-e2e"},next:{title:"FAQ",permalink:"/zh/docs/dashboard/FAQ"}},c=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Running E2E Tests Locally",id:"running-e2e-tests-locally",children:[]},{value:"Start with source code",id:"start-with-source-code",children:[]},{value:"Start with docker-compose",id:"start-with-docker-compose",children:[]},{value:"Start tests",id:"start-tests",children:[]},{value:"Writing Unit &amp; E2E (End to End) Tests",id:"writing-unit--e2e-end-to-end-tests",children:[]},{value:"Writing Unit Tests",id:"writing-unit-tests",children:[]},{value:"Writing E2E Tests",id:"writing-e2e-tests",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This document provides the details of setting up the environment for running the tests locally with the guide for the writing unit & E2E tests for the backend."),Object(i.b)("h2",{id:"table-of-contents"},"Table of Contents"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#running-e2e-tests-locally"},"Running E2E Tests Locally"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#start-with-source-code"},"Start with source code")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#start-with-docker-compose"},"Start with docker-compose")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#start-tests"},"Start tests")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#writing-unit-&-e2e-(end-to-end)-tests"},"Writing Unit & E2E (End to End) Tests"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#writing-unit-tests"},"Writing Unit Tests")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#writing-e2e-tests"},"Writing E2E Tests"))))),Object(i.b)("h2",{id:"running-e2e-tests-locally"},"Running E2E Tests Locally"),Object(i.b)("h2",{id:"start-with-source-code"},"Start with source code"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To run back end E2E test, please start the ",Object(i.b)("inlineCode",{parentName:"p"},"manager-api"),", ",Object(i.b)("inlineCode",{parentName:"p"},"apisix"),", ",Object(i.b)("inlineCode",{parentName:"p"},"etcd")," and ",Object(i.b)("inlineCode",{parentName:"p"},"upstream-node")," at first.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To start the ",Object(i.b)("inlineCode",{parentName:"p"},"manager-api")," project locally, please refer to ",Object(i.b)("a",{parentName:"p",href:"/zh/docs/dashboard/develop"},"develop")," web section.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To start the etcd locally, please refer to ",Object(i.b)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/install-dependencies/"},"etcd start")," web section.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To start the ",Object(i.b)("inlineCode",{parentName:"p"},"apisix")," project locally, please refer to ",Object(i.b)("a",{parentName:"p",href:"https://github.com/apache/apisix#get-started"},"apisix start")," web section.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To start the ",Object(i.b)("inlineCode",{parentName:"p"},"upstream-node")," locally, please install docker in the local environment and execute the command."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"}," docker run -d --name upstream -v /(Your apisix-dashboard folder path)/api/test/docker/upstream.conf:/etc/nginx/conf.d/default.conf:ro -p 80:80 -p 1980:1980 -p 1981:1981 -p 1982:1982 -p 1983:1983 -p 1984:1984 johz/upstream:v2.0\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After all the services are started, you can start the back-end E2E test.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"upstream-node")," IP is temporarily changed to the local IP address. After the test, it should be changed to GitHub upstream node IP. If the test case does not involve the upstream node, it does not need to be modified."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},' # Local E2E test create route example\n {\n     "uris": ["/test-test"],\n     "name": "route_all",\n     "desc": "test",\n     "methods": ["GET"],\n     "hosts": ["test.com"],\n     "status": 1,\n     "upstream": {\n         "nodes": {\n             # upstream node IP is required for local test\n             "(local ip):1981": 1\n         },\n         "type": "roundrobin"\n      }\n }\n\n  # GitHub E2E test create route example\n {\n     "uris": ["/test-test"],\n     "name": "route_all",\n     "desc": "test",\n     "methods": ["GET"],\n     "hosts": ["test.com"],\n     "status": 1,\n     "upstream": {\n         "nodes": {\n             "172.16.238.20:1981": 1\n         },\n         "type": "roundrobin"\n      }\n }\n')))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")),Object(i.b)("h2",{id:"start-with-docker-compose"},"Start with docker-compose"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"install docker-compose")),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"NOTE:")," In order to run docker compose locally, please change the values of ",Object(i.b)("inlineCode",{parentName:"p"},"listen.host")," and ",Object(i.b)("inlineCode",{parentName:"p"},"etcd.endpoints")," within ",Object(i.b)("inlineCode",{parentName:"p"},"./api/conf/conf.yaml")," as follows:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"listen:\n   host: 0.0.0.0\n   port: 9000\netcd:\n   endpoints:\n     - 172.16.238.10:2379\n     - 172.16.238.11:2379\n     - 172.16.238.12:2379\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose")," to run services such as ",Object(i.b)("inlineCode",{parentName:"p"},"manager-api"),", ",Object(i.b)("inlineCode",{parentName:"p"},"apisix"),", ",Object(i.b)("inlineCode",{parentName:"p"},"etcd")," and ",Object(i.b)("inlineCode",{parentName:"p"},"upstream-node"),", run the command."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"cd /(Your apisix-dashboard folder path)/api/test/docker\n# Download the apisix dockerfile\ncurl -o Dockerfile-apisix https://raw.githubusercontent.com/apache/apisix-docker/master/alpine/Dockerfile\ndocker-compose up -d\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When you use ",Object(i.b)("inlineCode",{parentName:"p"},"docker-compose")," to run the local E2E test and need to update the main code, you need to execute the command to close the cluster."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"cd /(Your apisix-dashboard folder path)/api/test/docker\n# -v: Remove links to mount volumes and volumes\ndocker-compose  down -v\n# If you don't want to remove the link between mount volume and volume, you can use\ndocker-compose stop [serviceName]\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Then you need to delete the image of the ",Object(i.b)("inlineCode",{parentName:"p"},"manage-api"),", rebuild the image of the ",Object(i.b)("inlineCode",{parentName:"p"},"manage-api"),", and start the cluster after the image is successfully built.\n(Only if you have altered/added any core functionalities in ",Object(i.b)("inlineCode",{parentName:"p"},"manager-api"),", for simply adding/deleting a test case/file, rebuilding is not required)."))),Object(i.b)("p",null,"** For ease of access and to avoid the repetitive hassle for setting up the required configurations, we have provided a ",Object(i.b)("inlineCode",{parentName:"p"},"setup.sh")," script\nwhich is inside ",Object(i.b)("inlineCode",{parentName:"p"},"api/test/docker")," directory. You can directly run, delete and build services along with update and revert ",Object(i.b)("inlineCode",{parentName:"p"},"conf.yaml")," through the script.\nFor more details, run"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-sh"},"./setup.sh help\n")),Object(i.b)("p",null,"(If you are setting up the environment for the first time, please go with the described manual steps. It'll help you to get the idea of what's going on in the background)."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")),Object(i.b)("h2",{id:"start-tests"},"Start tests"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"After all the services are started, you can start the back-end E2E test."),Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"NOTE:")," Sometimes we need to delete the etcd store info. Otherwise, it will make the test failed."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter the E2E folder and execute the command to test all E2E test files."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"}," cd /(Your apisix-dashboard folder path)/api/test/e2e\n go test -v\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can also do E2E test on a single file."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"}," cd /(Your apisix-dashboard folder path)/api/test/e2e\n go test -v E2E-test-file.go base.go\n"))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Currently, a lot of tests has been migrated to E2ENEW folder using the ginkgo testing framework for its ability to provide\nhigh expressiveness which makes reading and writing tests a pleasure."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Enter the E2ENEW folder and execute the command to run all the E2ENEW test suites recursively."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"}," cd /(Your apisix-dashboard folder path)/api/test/e2enew\n ginkgo -r\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You can also run a single E2ENEW test suite using ginkgo."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"}," cd /(Your apisix-dashboard folder path)/api/test/e2enew/(path of the specific test suite)\n ginkgo -r\n")))))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")),Object(i.b)("h2",{id:"writing-unit--e2e-end-to-end-tests"},"Writing Unit & E2E (End to End) Tests"),Object(i.b)("h2",{id:"writing-unit-tests"},"Writing Unit Tests"),Object(i.b)("p",null,"Currently, all the unit tests for ",Object(i.b)("inlineCode",{parentName:"p"},"manager-api")," have been written using Go's built-in testing package. There is nothing new about it. You can directly add tests in the existing ",Object(i.b)("inlineCode",{parentName:"p"},"<module>_test.go")," file or create a new one. There is one thing that needs to be addressed that is, since ",Object(i.b)("inlineCode",{parentName:"p"},"manager-api")," largely depends on handling data from etcd, in some cases, you need to write some feature that depends on storing & retrieval of information on and out of etcd. In such a scenario, you should write your unit tests using ",Object(i.b)("inlineCode",{parentName:"p"},"store.MockInterface")," instead of directly depending upon etcd."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"MockInterface")," embeds ",Object(i.b)("inlineCode",{parentName:"p"},"mock.Mock")," object from ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/stretchr/testify/mock"},"mock")," package by testify. If helps in simulating function calls of an object with desired inputs as arguments and outputs as return values. Currently, all the unit tests in ",Object(i.b)("inlineCode",{parentName:"p"},"route"),", ",Object(i.b)("inlineCode",{parentName:"p"},"service"),", ",Object(i.b)("inlineCode",{parentName:"p"},"ssl")," and ",Object(i.b)("inlineCode",{parentName:"p"},"upstream")," handlers uses mock interface. For e.g."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},'mStore := &store.MockInterface{}\nmStore.On("<exact methodname of the real method>", mock.Anything)\n      .Run(func(args mock.Arguments) {\n           //arguments assertions or anything\n           //gets executed before returning\n       })\n      .Return("<same return signature of the original method>")\n')),Object(i.b)("p",null,"You may tinker with the mentioned tests to get an idea of how it works or go through the ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/stretchr/testify/mock#pkg-index"},"docs"),"."),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")),Object(i.b)("h2",{id:"writing-e2e-tests"},"Writing E2E Tests"),Object(i.b)("p",null,"Currently, the backend of apisix-dashboard have two types of e2e tests. One is plain e2e, the other is e2enew, where in the first one, tests are written using Go's built-in, native testing package, for the later, the tests are grouped into test suites and are evaluated using ",Object(i.b)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/"},"ginkgo")," - a testing framework which helps in writing more expressive tests such that reading and writing tests give a pleasant experience."),Object(i.b)("p",null,"**Actively, we are migrating all of our e2e tests to e2enew module. So we are no more accepting tests inside e2e module, and any new tests must be added into the e2enew module by using ginkgo following the BDD style testing. If you have any query regarding it, please discuss your concerns with the community, we would be happy to address those."),Object(i.b)("p",null,"For value assertion, we are using the ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/stretchr/testify@v1.7.0/assert"},"assert")," package by testify. It provides lots of easy to use functions for assertion where the first argument is ",Object(i.b)("inlineCode",{parentName:"p"},"*testing.T")," object which can  be obtained from ",Object(i.b)("inlineCode",{parentName:"p"},"ginkgo.GinkgoT()"),"."),Object(i.b)("p",null,"If you are creating any test which requires making HTTP calls to any of the following node which involves ",Object(i.b)("inlineCode",{parentName:"p"},"manager-api")," or ",Object(i.b)("inlineCode",{parentName:"p"},"apisix"),", after setting up the environment (please refer ",Object(i.b)("a",{parentName:"p",href:"#running-e2e-tests-locally"},"Running E2E Tests Locally")," for the details), you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"HttpTestCase")," struct which provides a nice interface to make the calls along with performing necessary checks on the response. Here's a brief description of the most used fields of the struct,"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-go"},"type HttpTestCase struct {\n    Desc          string                // Description about the test case.\n    Object        *httpexpect.Expect    // returns a httpexpect object i.e. on which host the request is going to be made.\n    Method        string                // HTTP request methods ( GET, POST, PATCH, PUT, DELETE, OPTIONS).\n    Path          string                // the route path of that host\n    Query         string                // Query params\n    Body          string                // The request Body. Commonly used in POST, PUT, PATCH.\n    Headers       map[string]string     // Request headers. Include authorization header for secure routes.\n    ExpectStatus  int                   // Expected HTTP status code from the response\n    ExpectCode    int                   // Code generated by the host. Generally 0 for http.StatusOK.\n    ExpectMessage string                // The response message provided in the response by the host.\n    ExpectBody    interface{}           // The expected message body as a response.\n    Sleep         time.Duration //ms    // Cooldown period before making next request.\n}\n")),Object(i.b)("p",null,"Now to run a test use the ",Object(i.b)("inlineCode",{parentName:"p"},"RunTestCase(tc HttpTestCase)")," method which is provided into the base package inside the ",Object(i.b)("inlineCode",{parentName:"p"},"e2enew")," module."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"NOTE:")," E2ENEW also provides standalone methods for making HTTP request for GET, POST, PUT, DELETE methods along with making a POST request with ",Object(i.b)("inlineCode",{parentName:"p"},"multipart/form")," data. The method signatures are stated below"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpGet(url string, headers map[string]string) ([]byte, int, error)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpPost(url string, headers map[string]string, reqBody string) ([]byte, int, error)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpPut(url string, headers map[string]string, reqBody string) ([]byte, int, error)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"HttpDelete(url string, headers map[string]string) ([]byte, int, error)"))),Object(i.b)("p",null,"Now coming back to writing e2enew tests,"),Object(i.b)("p",null,"*If you are new to ginkgo it's always recommended going through the official ",Object(i.b)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/"},"docs")," first."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To create a new tests' suite, create the new directory under ",Object(i.b)("inlineCode",{parentName:"p"},"e2enew")," module. Then for the initial bootstrapping use,"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"   mkdir <dirname> #inside e2enew\n   cd <dirname>\n   ginkgo bootstrap # Generates <dirname>_suite_test.go\n   #to add tests in separate files\n   ginkgo generate <testgroup> #Generates <testgroup>_test.go\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This can be done manually, however, grouping similar tests in specific test files is always recommended. Please try to separate tests in separate test files.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We use different ginkgo containers for writing tests which includes ",Object(i.b)("inlineCode",{parentName:"p"},"Describe"),", ",Object(i.b)("inlineCode",{parentName:"p"},"It"),", ",Object(i.b)("inlineCode",{parentName:"p"},"AfterSuite"),", ",Object(i.b)("inlineCode",{parentName:"p"},"BeforeEach")," etc. [ ",Object(i.b)("a",{parentName:"p",href:"https://onsi.github.io/ginkgo/#structuring-your-specs"},"ref")," ]. For eg, adding a few logically similar tests inside an existing test suite may looks like"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-go"},'var _ = ginkgo.Describe("<description about the tests>", func() {\n         ginkgo.It("<test 1>", func() {\n            //Testing logic & assertions\n         })\n         ginkgo.It("<test 2>", func() {\n            //Testing logic & assertions\n         })\n      })\n')),Object(i.b)("p",{parentName:"li"}," here the ",Object(i.b)("inlineCode",{parentName:"p"},"Describe")," container is grouping similar tests through multiple ",Object(i.b)("inlineCode",{parentName:"p"},"It")," blocks by making extensive use of closures to give the syntax a high expressiveness.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Though depending upon the scenario, it is always recommended to use ginkgo's table-driven tests for running the independent ",Object(i.b)("inlineCode",{parentName:"p"},"HttpTestCase")," using ",Object(i.b)("inlineCode",{parentName:"p"},"table.DescribeTable")," and ",Object(i.b)("inlineCode",{parentName:"p"},"table.Entry")," [ ",Object(i.b)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/onsi/ginkgo/extensions/table"},"ref")," ]. For eg,"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-go"},'var _ = ginkgo.Describe("<description about the tests>", func() {\n         table.DescribeTable("<logical group 1>",\n            func(tc base.HttpTestCase) {\n               base.RunTestCase(tc)\n            },\n            table.Entry("<test 1>", base.HttpTestCase{\n               //Fill the fields\n            }),\n            table.Entry("<test 2>", base.HttpTestCase{\n               //Fill the fields\n            }),\n         })\n\n         table.DescribeTable("<logical group 2>", func () {\n            ...\n         })\n\n      })\n'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"FYI, internally ginkgo reduces each table entries to ",Object(i.b)("inlineCode",{parentName:"p"},"It")," block and run all the ",Object(i.b)("inlineCode",{parentName:"p"},"It")," blocks concurrently/parallel. Ginkgo auto recovers from panics inside ",Object(i.b)("inlineCode",{parentName:"p"},"It")," blocks only, so always put your assertions inside ",Object(i.b)("inlineCode",{parentName:"p"},"It")," containers."))),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"#table-of-contents"},"Back to TOC")))}p.isMDXComponent=!0},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(s,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,o(o({ref:t},l),{},{components:n})):r.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);