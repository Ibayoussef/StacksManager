# ComponentCard Component

## Usage

```jsx
<ComponentCard
  component={{
    id: "1f6a4f4b-9da3-4085-bd25-45a7255be88a",
    created: "2022-11-23T15:14:43",
    updated: "2022-11-23T15:14:43",
    user: "ef99200c-807a-4efa-b006-303462d6680c",
    project: "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    is_shared: false,
    name: "multi_tenant",
    type: "orchestrator",
    flavor: "kubeflow",
    configuration: {
      synchronous: false,
      timeout: 1200,
      client_args: {},
      user_namespace: null,
      node_selectors: {},
      node_affinity: {},
      pod_settings: null,
      kubeflow_pipelines_ui_port: 8080,
      kubeflow_hostname: "https://www.myshowcase.zenml.io/pipeline",
      kubeflow_namespace: "kubeflow",
      kubernetes_context: "zenml-cluster",
      skip_local_validations: false,
      skip_cluster_provisioning: false,
      skip_ui_daemon_provisioning: false,
    },
  }}
/>
```
