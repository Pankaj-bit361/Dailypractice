import data from "../../submissionData.json"; // do not create this file
import "cypress-localstorage-commands";
// let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];

const Data = [
  {
    name: "S",
    desc: "D",
    addDate: "2020-01-01",
    deadline: "2020-01-02",
    priority: "Low",
  },
  {
    name: "S1",
    desc: "D2",
    addDate: "2020-01-01",
    deadline: "2020-01-02",
    priority: "Mid",
  },
  {
    name: "S2",
    desc: "D2",
    addDate: "2020-01-01",
    deadline: "2020-01-02",
    priority: "High",
  },
];
data.map(({ submission_link: url, id }) => {
  describe("Test", function () {
    let acc_score = 1;
    function FormSubmit(data, score, LSLen) {
      cy.get("#name").clear().type(data.name);
      cy.get("#desc").clear().type(data.desc);
      cy.get("#addDate").clear().type(data.addDate);
      cy.get("#deadline").clear().type(data.deadline);
      cy.get("#priority").select(data.priority);
      cy.get("form")
        .submit()
        .should(() => {
          expect(JSON.parse(localStorage.getItem("todos")).length).to.equal(
            LSLen
          );
        })
        .then(() => {
          acc_score += score;
        });
    }
    function CheckTable(data, score, index) {
      cy.get("tbody tr").eq(index).contains("td", data.name);
      cy.get("tbody tr").eq(index).contains("td", data.desc);
      cy.get("tbody tr").eq(index).contains("td", data.addDate);
      cy.get("tbody tr").eq(index).contains("td", data.deadline);
      cy.get("tbody tr")
        .eq(index)
        .contains("td", data.priority)
        .then(() => {
          acc_score += score;
        });
    }
    function CheckBoard(data, score, index, id) {
      cy.get(`#${id}>div>div`).eq(index).contains("h3", data.name);
      cy.get(`#${id}>div>div`).eq(index).contains("p", data.desc);
      cy.get(`#${id}>div>div`).eq(index).contains("p", data.addDate);
      cy.get(`#${id}>div>div`).eq(index).contains("p", data.deadline);
      cy.get(`#${id}>div>div`).eq(index).contains("p", data.priority);

      cy.then(() => {
        acc_score += score;
      });
    }
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    if (url && url.length) {
      beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });
      it("Form Submit Storing Data is LS", () => {
        cy.visit(url);
        expect(localStorage.getItem("todos")).to.eq(null);
        FormSubmit(Data[0], 2, 1);
      }); // Score:- 2
      it("Check the LS Data after mutiple form submits", () => {
        FormSubmit(Data[1], 1, 2);
        FormSubmit(Data[2], 1, 3);
      }); // Score:- 2
      it("Visit the Board Page and Check the boards", () => {
        cy.visit(`${url}board.html`);
        CheckBoard(Data[0], 1, 0, "todo");
        CheckBoard(Data[1], 1, 1, "todo");
        CheckBoard(Data[2], 1, 2, "todo");
        cy.get("#todo>div").children("div").should("have.length", 3);
        cy.get("#progress>div").children("div").should("have.length", 0);
        cy.get("#stuck>div").children("div").should("have.length", 0);
        cy.get("#completed>div").children("div").should("have.length", 0);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:- 4
      it(`Check the flex value and the responsiveness of the board`, () => {
        cy.get(".board").should("have.css", "display", "flex");
        cy.viewport(800, 800);
        cy.get(".board").should("have.css", "flex-direction", "column");
        cy.then(() => {
          acc_score += 2;
        });
      }); // Score:- 2
      it("Check the board after changing the status", () => {
        cy.get("#todo>div>div").eq(0).children("select").select("progress");
        cy.get("#todo>div").children("div").should("have.length", 2);
        CheckBoard(Data[1], 0.5, 0, "todo");
        CheckBoard(Data[2], 0.5, 1, "todo");
        cy.get("#progress>div").children("div").should("have.length", 1);
        CheckBoard(Data[0], 1, 0, "progress");
        cy.get("#stuck>div").children("div").should("have.length", 0);
        cy.get("#completed>div").children("div").should("have.length", 0);
        cy.then(() => {
          acc_score += 1;
        });
      }); // Score:-3
      it("Change the status a bunch more times and check the board", () => {
        cy.get("#todo>div>div").eq(1).children("select").select("completed");
        cy.get("#todo>div").children("div").should("have.length", 1);
        CheckBoard(Data[1], 0.5, 0, "todo");
        cy.get("#progress>div").children("div").should("have.length", 1);
        CheckBoard(Data[0], 0.5, 0, "progress");
        cy.get("#stuck>div").children("div").should("have.length", 0);
        cy.get("#completed>div").children("div").should("have.length", 1);
        CheckBoard(Data[2], 0.5, 0, "completed");
        cy.then(() => {
          acc_score += 0.5;
        });
      }); // score:- 2
      it("Check the Deleting Functionality", () => {
        expect(localStorage.getItem("deleted-todos")).to.eq(null);
        cy.get("#todo>div>div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(
              JSON.parse(localStorage.getItem("deleted-todos")).length
            ).to.eq(1);
          });
        cy.get("#todo>div").children("div").should("have.length", 0);
        cy.get("#completed>div>div")
          .eq(0)
          .children("button")
          .click()
          .then(() => {
            expect(
              JSON.parse(localStorage.getItem("deleted-todos")).length
            ).to.eq(2);
          });
        cy.get("#completed>div").children("div").should("have.length", 0);
        cy.then(() => {
          acc_score += 2;
        });
      }); // Score:- 2
      it("Check the Deleted page", () => {
        cy.visit(url + "/deleted.html");
        CheckTable(Data[1], 1, 0);
        CheckTable(Data[2], 1, 1);
      }); // Score:- 2
    }

    it(`generate score`, () => {
      //////////////
      console.log(acc_score);
      let result = {
        id,
        marks: Math.floor(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
