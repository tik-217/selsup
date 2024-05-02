import { Component } from "react";

interface Param {
  id: number;
  name: string;
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface IState {
  params: Param[];
  model: Model;
}

class ParamEditor extends Component<Props, IState> {
  constructor(props: Props) {
    super(props);

    this.state = {
      params: [
        {
          id: 1,
          name: "Назначение",
        },
        {
          id: 2,
          name: "Длина",
        },
        {
          id: 3,
          name: "HHHHH",
        },
      ],
      model: {
        paramValues: [
          {
            paramId: 1,
            value: "повседневное",
          },
          {
            paramId: 2,
            value: "макси",
          },
          {
            paramId: 3,
            value: "мasdsdasdasda",
          },
        ],
      },
    };
  }

  public getModel(): Model {
    return this.state.model;
  }

  render(): React.ReactNode {
    return (
      <>
        <div>
          {this.state.params.map((el, index) => {
            return (
              <section key={index + el.name}>
                <span>{el.name}</span>
                <input
                  type="text"
                  value={this.state.model.paramValues
                    .map((el) => (el.paramId === index + 1 ? el.value : ""))
                    .filter((el) => !!el && el)}
                  onChange={(e) =>
                    this.setState({
                      model: {
                        paramValues: this.state.model.paramValues.map((el) =>
                          el.paramId === index + 1
                            ? {
                                paramId: el.paramId,
                                value: (e.target as HTMLInputElement).value,
                              }
                            : { paramId: el.paramId, value: el.value }
                        ),
                      },
                    })
                  }
                />
              </section>
            );
          })}
        </div>
      </>
    );
  }
}

export default ParamEditor;
